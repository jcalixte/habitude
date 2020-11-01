import PouchDb from 'pouchdb-browser'
import { DataType } from './Datatype.enum'
import { Model } from './models/Model'
import indexedDb from 'pouchdb-adapter-indexeddb'

PouchDb.plugin(indexedDb)

interface GetAllParams {
  prefix?: string
  includeDocs?: boolean
  includeAttachments?: boolean
}

class Data {
  private locale = new PouchDb('local-habitude', {
    adapter: 'indexeddb'
  })

  public async add<D extends DataType>(model: Model<D>): Promise<boolean> {
    try {
      const result = await this.locale.put(model)
      return result.ok
    } catch {
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
      return result.ok
    } catch {
      return false
    }
  }

  public async get<D extends DataType, T extends Model<D>>(
    id: string
  ): Promise<T | null> {
    try {
      return ((await this.locale.get(id)) as T) || null
    } catch {
      return null
    }
  }

  public async getAll<D extends DataType, T extends Model<D>>({
    prefix,
    includeDocs = true,
    includeAttachments = false
  }: GetAllParams): Promise<T[]> {
    const response = await this.locale.allDocs({
      include_docs: includeDocs,
      attachments: includeAttachments,
      startkey: prefix ? prefix : undefined,
      endkey: prefix ? `${prefix}\ufff0` : undefined
    })

    return response.rows.map((row) => row.doc) as T[]
  }

  public getId(...args: string[]) {
    return args.join('-')
  }
}

export const data = new Data()
