// https://www.codewars.com/kata/515bb423de843ea99400000a

class PaginationHelper {
	constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.#collection = collection;
        this.#itemsPerPage = itemsPerPage;
	}
	itemCount() {
	    // returns the number of items within the entire collection
        return this.#collection.length;
	}
	pageCount() {
	    // returns the number of pages
        return Math.ceil(this.#collection.length / this.#itemsPerPage);
	}
	pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        if (pageIndex < 0 || pageIndex >= this.pageCount())
            return -1;
        else if (pageIndex == this.pageCount() - 1)
            return this.#collection.length - this.#itemsPerPage * (this.pageCount() - 1);
        else
            return this.#itemsPerPage;
	}
	pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        if (itemIndex < 0 || itemIndex >= this.#collection.length)
            return -1;
        return Math.ceil((itemIndex + 1) / this.#itemsPerPage) - 1;
	}

    #collection;
    #itemsPerPage;
}


const helper = new PaginationHelper(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    10,
)

console.log("Testing normal collection");
console.log(helper.pageCount()); // 3
console.log(helper.itemCount()); // 24

console.log(helper.pageItemCount(1)); // 10
console.log(helper.pageItemCount(2)); // 4
console.log(helper.pageItemCount(3)) // -1
console.log(helper.pageIndex(-1)); // 40

console.log(helper.pageIndex(22)); // 2
console.log(helper.pageIndex(3)); // 0
console.log(helper.pageIndex(0)); // 0
console.log(helper.pageIndex(-1)); // -1
console.log(helper.pageIndex(-23)); // -1
console.log(helper.pageIndex(-15)); // -1


console.log("Testing empty collection");
const empty = new PaginationHelper([], 10);

console.log(empty.pageCount()); // 0
console.log(empty.itemCount()); // 0
console.log(empty.pageIndex(0)); // -1
console.log(empty.pageItemCount(0)); // -1
