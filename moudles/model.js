'use strict';
// Generic mongo model: will be extended in other models

'use strict';

class Model {

    constructor(schema) {
        this.schema = schema;
    }

    get(_id) {
        if (_id) {
            return this.schema.findById(_id);
        } else {
            return this.schema.find({});
        }
    }

    post(record) {
        let newRecord = new this.schema(record);
        return newRecord.save();
    }
    update(_id, record) {
        return this.schema.findByIdAndUpdate(_id, record, {new: true});
    }
    /**
     * 
     * @param {string} _id 
     * @return {*}
     */
    delete(_id) {
        // return promise
        return this.schema.findByIdAndDelete(_id);
    }
}

module.exports = Model;