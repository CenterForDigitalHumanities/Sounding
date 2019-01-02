const CONFIG = {
    "fields": [ {
        "label": "file",
        "options": {
            "type": "text",
            "helptext": "Link to the resource file",
            "required": true
        },
        "motivation": "linking",
        "type": "rdf:resource"
    }, {
        "label": "transcription",
        "options": {
            "type": "memo",
            "helptext": "Exact transcription of resource"
        },
        "motivation": "supplementing",
        "type": "cnt:ContentAsText"
    }, {
        "label": "title",
        "options": {
            "type": "text",
            "helptext": "name given to resource"
        },
        "motivation": "describing",
        "type": "schema:name"
    }, {
        "label": "creator(s)",
        "options": {
            "type": "select",
            "multiple": true,
            "helptext": "Author of resource",
            "optionElements": [
                { "label": "< Select One >", "value": "" },
                { "label": "Phyllis Weliver", "value": "http://devstore.rerum.io/v1/id/phyllis-weliver" },
                { "label": "JG", "value": "http://devstore.rerum.io/v1/id/JG" },
                { "label": "Heather Bozant-Witcher", "value": "http://devstore.rerum.io/v1/id/heather-bozant-witcher" },
                { "label": "Alexia Inge", "value": "http://devstore.rerum.io/v1/id/alexia-inge" },
                { "label": "Rosie Inge", "value": "http://devstore.rerum.io/v1/id/rosie-inge" },
                { "label": "Susie Thornhill", "value": "http://devstore.rerum.io/v1/id/susie-thornhill" },
                { "label": "none (intentionally null)", "value": "http://devstore.rerum.io/v1/id/null" },
            ]
        },
        "motivation": "describing",
        "type": "schema:creator"
    }, {
        "label": "contributor(s)",
        "options": {
            "type": "select",
            "multiple": true,
            "helptext": "Author of resource",
            "optionElements": [
                { "label": "< Select One >", "value": "" },
                { "label": "Phyllis Weliver", "value": "http://devstore.rerum.io/v1/id/phyllis-weliver" },
                { "label": "JG", "value": "http://devstore.rerum.io/v1/id/JG" },
                { "label": "Heather Bozant-Witcher", "value": "http://devstore.rerum.io/v1/id/heather-bozant-witcher" },
                { "label": "Alexia Inge", "value": "http://devstore.rerum.io/v1/id/alexia-inge" },
                { "label": "Rosie Inge", "value": "http://devstore.rerum.io/v1/id/rosie-inge" },
                { "label": "Susie Thornhill", "value": "http://devstore.rerum.io/v1/id/susie-thornhill" },
                { "label": "none (intentionally null)", "value": "http://devstore.rerum.io/v1/id/null" },
            ]
        },
        "motivation": "describing",
        "type": "schema:contributor"
    }, {
        "label": "date",
        "options": {
            "type": "date",
            "helptext": "Creation date"
        },
        "motivation": "describing",
        "type": "schema:dateCreated"
    }, {
        "label": "source",
        "options": {
            "type": "text",
            "helptext": "Reference to resource from which the present resource is derived. Note: Origin Location, Physical Location, & Shelfmark are clarifiers of Source."
        },
        "motivation": "describing",
        "type": "madsrdf:Source"
    }, {
        "label": "origin location",
        "options": {
            "type": "text",
            "helptext": "Location (usually country) where resource originated"
        },
        "motivation": "describing",
        "type": "schema:Place"
    }, {
        "label": "physical location",
        "options": {
            "type": "text",
            "helptext": "Location where resource is currently held. Include archive/library and affiliation."
        },
        "motivation": "describing",
        "type": "schema:Place"
    }, {
        "label": "shelfmark",
        "options": {
            "type": "text",
            "helptext": "Shelfmark or bibliographic citation of resource"
        },
        "motivation": "describing",
        "type": "schema:identifier"
    }, {
        "label": "description",
        "options": {
            "type": "memo",
            "helptext": "An account of the content of the resource. Use full sentences. Description presents identifiable information to users to assist in their selection of appropriate resources."
        },
        "motivation": "describing",
        "type": "schema:description"
    }, {
        "label": "subject",
        "options": {
            "type": "array_text",
            "helptext": "Topic of the content of the resources. Subject is expressed using keywords or phrases, similar to that found in a library database's subject headings."
        },
        "motivation": "describing",
        "type": "schema:about"
    }, {
        "label": "extent",
        "options": {
            "type": "text",
            "helptext": "Statement of the number and specific material of the resource that express physical extent"
        },
        "motivation": "describing",
        "type": "schema:Intangible"
    }, {
        "label": "website",
        "options": {
            "type": "url",
            "helptext": "Title of online location where digitized resource will be found",
            "default_value":"https://placeholder.salon",
            "readonly":true
        },
        "motivation": "describing",
        "type": "schema:schema:targetCollection" // find by this
    }, {
        "label": "contributing institutions",
        "options": {
            "type": "array_text",
            "helptext": "Institution(s) that contribute metadata or resources"
        },
        "motivation": "describing",
        "type": "schema:contributor"
    }, {
        "label": "publisher",
        "options": {
            "type": "text",
            "helptext": "Entity responsible for making resource available"
        },
        "motivation": "describing",
        "type": "schema:publisher"
    }, {
        "label": "rights",
        "options": {
            "type": "text",
            "helptext": "Entity responsible for making resource available"
        },
        "motivation": "describing",
        "type": "schema:Intangible"
    }, {
        "label": "language",
        "options": {
            "type": "text",
            "helptext": "Language of the resource's content"
        },
        "motivation": "describing",
        "type": "schema:inLanguage"
    }, {
        "label": "format",
        "options": {
            "type": "text",
            "helptext": "Physical or digital manifestation of the resource. May include size of resource, if applicable."
        },
        "motivation": "describing",
        "type": "schema:fileFormat"
    }, {
        "label": "note",
        "options": {
            "type": "memo",
            "helptext": "Language of the resource's content"
        },
        "motivation": "commenting",
        "type": "cnt:ContentAsText"
    }, {
        "label": "digital collection (relation)",
        "options": {
            "type": "url",
            "helptext": "Reference to resources in related digital collections. Use collection title."
        },
        "motivation": "describing",
        "type": "schema:isRelatedTo"
    }, {
        "label": "date digital",
        "options": {
            "type": "date",
            "helptext": "Date resource is digitized or published"
        },
        "motivation": "describing",
        "type": "schema:dateCreated"
    }, {
        "label": "digital assistant",
        "options": {
            "type": "url",
            "hidden": true
        },
        "motivation": "describing",
        "type": "schema:isRelatedTo"
    }
],
"collectionPage":"https://placeholder.salon"
}

// Dummy schema
// let fields = [{
// 	label: "test",
// 	default_value: "filled",
// 	options: {
// 		helptext: "",
// 		type: "number", // memo, text, number, email, url, tel, range, date, month, week, time, datetime, color
// 		required: false,
// 		readonly: false,
// 		min: null, // range, date
// 		max: null, // range, date
// 		step: null, // range
// 		pattern: null // tel
// 	},
// 	type: "rr:test" // web ontology from schema (JSON-LD @type)
// }, {
// 	label: "multiple",
// 	default_value: "grommit",
// 	options: {
// 		type: "memo"
// 	},
// 	type: "cidoc-crm:Stuff"
// }, {
// 	label: "multiple",
// 	default_value: "grommit",
// 	options: {
// 		type: "date"
// 	}
// }, {
// 	label: "multiple",
// 	default_value: "grommit",
// 	options: {
// 		type: "text"
// 	}
// }]