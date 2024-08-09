import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchableFields: string[]) {
        const searchParams = this.query?.searchParams as string;
        if (searchParams) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: searchParams, $options: "i" }
                }))
            } as FilterQuery<T>);
        }
        return this;
    }

    filter() {
        const copyQuery = { ...this.query };
        const deletedFields = ["searchParams", "sort", "limit", "page", "field"];
        deletedFields.forEach(element => delete copyQuery[element]);

        if (copyQuery.filter) {
            this.modelQuery = this.modelQuery.find({ category: copyQuery.filter });
        } else {
            this.modelQuery = this.modelQuery.find(copyQuery as FilterQuery<T>);
        }

        return this;
    }

    paginate() {
        const limit = Number(this.query?.limit) || 20;
        const page = Number(this.query?.page) || 1;
        const skip = (page - 1) * limit;

        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }

    sort() {
        const sortOrder = this.query.sort as string;

        if (sortOrder === "Low to High" || sortOrder === "High to Low") {
            const sort = sortOrder === "Low to High" ? 1 : -1;
            this.modelQuery = this.modelQuery.sort({ price: sort });
        } else {
            const defaultSort = (sortOrder?.split(",").join(" ") || "-createdAt") as string;
            this.modelQuery = this.modelQuery.sort(defaultSort);
        }

        return this;
    }
}

export default QueryBuilder;
