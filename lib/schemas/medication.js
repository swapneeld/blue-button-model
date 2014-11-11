module.exports = {
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
        "date_time": {
            "$ref": "http://local.com/common_models#/properties/cda_date"
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/common_models#/properties/cda_id"
            },
            "minItems": 1
        },
        "sig": {
            "type": "string"
        },
        "status": {
            "type": "string"
        },
        "administration": {
            "type": "object",
            "properties": {
                "dose": {
                    "$ref": "http://local.com/common_models#/properties/cda_physical_quantity"
                },
                "form": {
                    "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
                },
                "rate": {
                    "$ref": "http://local.com/common_models#/properties/cda_physical_quantity"
                },
                "route": {
                    "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
                },
                "dose_restriction": {
                    "$ref": "http://local.com/common_models#/properties/cda_physical_quantity"
                },
                "site": {
                    "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
                },
                "interval": {
                    "type": "object",
                    "properties": {
                        "xsiType": {
                            "type": "string"
                        },
                        "phase": {
                            "$ref": "http://local.com/common_models#/properties/cda_date"
                        },
                        "period": {
                            "$ref": "http://local.com/common_models#/properties/cda_physical_quantity"
                        },
                        "frequency": {
                            "type": "boolean"
                        },
                        "alignment": {
                            "type": "string"
                        },
                        "event": {
                            "type": "string"
                        },
                        "event_offset": {
                            "type": "object",
                            "properties": {
                                "low": {
                                    "$ref": "http://local.com/common_models#/properties/cda_physical_quantity"
                                },
                                "high": {
                                    "$ref": "http://local.com/common_models#/properties/cda_physical_quantity"
                                },
                                "center": {
                                    "$ref": "http://local.com/common_models#/properties/cda_physical_quantity"
                                },
                                "width": {
                                    "$ref": "http://local.com/common_models#/properties/cda_physical_quantity"
                                }

                            },
                            "additionalProperties": false

                        }
                    },
                    "additionalProperties": false
                }

            },
            "additionalProperties": false,
            "minProperties": 1
        },

        "precondition": {
            "type": "object",
            "properties": {
                "code": {
                    "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
                },
                "value": {
                    "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
                }
            },
            "additionalProperties": false
        },
        "product": {
            "type": "object",
            "properties": {
                "identifiers": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/common_models#/properties/cda_id"
                    },
                    "minItems": 1
                },
                "product": {
                    "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
                },
                "unencoded_name": {
                    "type": "string"
                },
                "manufacturer": {
                    "type": "string"
                }
            },
            "additionalProperties": false,
            "minProperties": 1,
            "required": [
                "product"
            ]
        },
        "supply": {
            "type": "object",
            "properties": {
                "date_time": {
                    "$ref": "http://local.com/common_models#/properties/cda_date"
                },
                "repeatNumber": {
                    "type": "string"
                },
                "quantity": {
                    "type": "string"
                },
                "author": {
                    "type": "object",
                    "properties": {
                        "identifiers": {
                            "type": "array",
                            "items": {
                                "$ref": "http://local.com/common_models#/properties/cda_id"
                            },
                            "minItems": 1
                        },
                        "date_time": {
                            "$ref": "http://local.com/common_models#/properties/cda_date"
                        },
                        "name": {
                            "$ref": "http://local.com/common_models#/properties/cda_name"
                        },
                        "organization": {
                            "$ref": "http://local.com/common_models#/properties/cda_organization"
                        }
                    },
                    "additionalProperties": false
                },
                "additionalProperties": false
            },
            "additionalProperties": false
        },
        "indication": {
            "type": "object",
            "properties": {
                "identifiers": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/common_models#/properties/cda_id"
                    },
                    "minItems": 1
                },
                "code": {
                    "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
                },
                "date_time": {
                    "$ref": "http://local.com/common_models#/properties/cda_date"
                },
                "value": {
                    "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
                }
            },
            "additionalProperties": false
        },
        "performer": {
            "$ref": "http://local.com/common_models#/properties/cda_performer"
        },
        "drug_vehicle": {
            "$ref": "http://local.com/common_models#/properties/cda_coded_entry"
        },
        "dispense": {
            "type": "object",
            "properties": {
                "identifiers": {
                    "type": "array",
                    "items": {
                        "$ref": "http://local.com/common_models#/properties/cda_id"
                    },
                    "minItems": 1
                },
                "performer": {
                    "$ref": "http://local.com/common_models#/properties/cda_performer"
                }
            },
            "additionalProperties": false
        }
    },
    "additionalProperties": false,
    "minProperties": 1,
    "required": [
        "product",
        "status"
    ]
};