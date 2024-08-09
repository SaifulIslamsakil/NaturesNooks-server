"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields) {
        var _a;
        const searchParams = (_a = this.query) === null || _a === void 0 ? void 0 : _a.searchParams;
        if (searchParams) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: searchParams, $options: "i" }
                }))
            });
        }
        return this;
    }
    filter() {
        const copyQuery = Object.assign({}, this.query);
        const deletedFields = ["searchParams", "sort", "limit", "page", "field"];
        deletedFields.forEach(element => delete copyQuery[element]);
        if (copyQuery.filter) {
            this.modelQuery = this.modelQuery.find({ category: copyQuery.filter });
        }
        else {
            this.modelQuery = this.modelQuery.find(copyQuery);
        }
        return this;
    }
    paginate() {
        var _a, _b;
        const limit = Number((_a = this.query) === null || _a === void 0 ? void 0 : _a.limit) || 20;
        const page = Number((_b = this.query) === null || _b === void 0 ? void 0 : _b.page) || 1;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    sort() {
        const sortOrder = this.query.sort;
        if (sortOrder === "Low to High" || sortOrder === "High to Low") {
            const sort = sortOrder === "Low to High" ? 1 : -1;
            this.modelQuery = this.modelQuery.sort({ price: sort });
        }
        else {
            const defaultSort = ((sortOrder === null || sortOrder === void 0 ? void 0 : sortOrder.split(",").join(" ")) || "-createdAt");
            this.modelQuery = this.modelQuery.sort(defaultSort);
        }
        return this;
    }
}
exports.default = QueryBuilder;
