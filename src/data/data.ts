import PouchDb from 'pouchdb-browser'
import { DataType } from './Datatype.enum'
import { Model } from './models/Model'
import indexedDb from 'pouchdb-adapter-indexeddb'
import { emit } from 'retrobus'

PouchDb.plugin(indexedDb)

interface GetAllParams {
  prefix?: string
  startKey?: string
  endKey?: string
  includeDocs?: boolean
  includeAttachments?: boolean
}

class Data {
  private locale = new PouchDb('local-quency', {
    adapter: 'indexeddb'
  })

  public async add<D extends DataType>(model: Model<D>): Promise<boolean> {
    try {
      const result = await this.locale.put(model)

      if (result.ok) {
        emit(model.$type)
      }

      return result.ok
    } catch (error) {
      console.log('error', { error })

      return false
    }
  }

  public async remove(id: string): Promise<boolean> {
    try {
      const doc = await this.get(id)
      if (!doc) {
        return false
      }
      const result = await this.locale.put({
        ...doc,
        _deleted: true
      })

      if (result.ok) {
        emit(doc.$type)
      }

      return result.ok
    } catch {
      return false
    }
  }

  public async get<D extends DataType, T extends Model<D>>(
    id: string
  ): Promise<T | null> {
    try {
      const result = ((await this.locale.get(id)) as T) || null

      return result
    } catch {
      return null
    }
  }

  public async getAll<D extends DataType, T extends Model<D>>({
    prefix,
    startKey,
    endKey,
    includeDocs = true,
    includeAttachments = false
  }: GetAllParams): Promise<T[]> {
    const finalStartKey = startKey ?? prefix ?? undefined
    const finalEndKey = endKey
      ? `${endKey}\ufff0`
      : prefix
      ? `${prefix}\ufff0`
      : undefined

    const response = await this.locale.allDocs({
      include_docs: includeDocs,
      attachments: includeAttachments,
      startkey: finalStartKey,
      endkey: finalEndKey
    })

    return response.rows.map((row) => row.doc) as T[]
  }

  public getId(...args: string[]) {
    return args.join('-')
  }
}

export const data = new Data()
