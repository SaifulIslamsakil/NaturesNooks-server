import { FilterQuery, Query } from "mongoose"

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>
    public query: Record<string, unknown>
    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery
        this.query = query
    }
    search(searchableFields: string[]) {
        const searchParams = this.query?.searchParams
        if (searchParams) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: searchParams, $options: "i" }
                }))
            } as FilterQuery<T>)
        }
        return this
    }
    filter() {
        const copyQuray = { ...this.query }
        const deletedField = ["searchParams", "sort", "limit", "page", "field"]
        deletedField.forEach(element => delete copyQuray[element])
        if (copyQuray.filter) {
            this.modelQuery = this.modelQuery.find({ category: copyQuray.filter })
            return this
        }
        this.modelQuery = this.modelQuery.find(copyQuray as FilterQuery<T>)
        return this
    }
    paginate() {
        const limit = Number(this?.query?.limit || 20)
        const page = Number(this?.query?.page || 1)
        const skip = (page - 1) * limit
        this.modelQuery = this.modelQuery.skip(skip).limit(limit)

        return this
    }
    sort() {
        const sortOrder = this.query.sort as string
        if (sortOrder === "asc" || sortOrder === "desc") {
            const sort = sortOrder === "asc" ? 1 : -1
            this.modelQuery = this.modelQuery.sort({ price: sort });
            return this;
        }
        const defaultSort = (this?.query?.sort as string)?.split(",")?.join(" ") || '-createdAt'
        this.modelQuery = this.modelQuery.sort(defaultSort as string)
        return this

    }
}


export default QueryBuilder