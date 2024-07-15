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
        const copyQuray = Object.assign({}, this.query);
        const deletedField = ["searchParams", "sort", "limit", "page", "field"];
        deletedField.forEach(element => delete copyQuray[element]);
        this.modelQuery = this.modelQuery.find(copyQuray);
        return this;
    }
    paginate() {
        var _a, _b;
        const limit = Number(((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.limit) || 1);
        const page = Number(((_b = this === null || this === void 0 ? void 0 : this.query) === null || _b === void 0 ? void 0 : _b.page) || 1);
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    sort() {
        var _a, _b, _c;
        const sortOrder = this.query.sort;
        if (sortOrder === "asc" || sortOrder === "desc") {
            const sort = sortOrder === "asc" ? 1 : -1;
            this.modelQuery = this.modelQuery.sort({ price: sort });
            return this;
        }
        const defaultSort = ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.sort) === null || _b === void 0 ? void 0 : _b.split(",")) === null || _c === void 0 ? void 0 : _c.join(" ")) || '-createdAt';
        this.modelQuery = this.modelQuery.sort(defaultSort);
        return this;
    }
}
exports.default = QueryBuilder;
