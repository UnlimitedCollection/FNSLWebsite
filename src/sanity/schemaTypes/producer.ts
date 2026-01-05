import { defineField, defineType } from 'sanity'

export const producer = defineType({
    name: 'producer',
    title: 'Producer',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'location',
            title: 'Location (Region/District)',
            type: 'string',
        }),
        defineField({
            name: 'producerType',
            title: 'Producer Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Small Producer Organization', value: 'spo' },
                    { title: 'Hired Labour', value: 'hl' },
                    { title: 'Contract Production', value: 'cp' }
                ]
            }
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'body',
            title: 'Our Story',
            type: 'blockContent',
        }),
        defineField({
            name: 'products',
            title: 'Products Supplied',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'product' } }]
        }),
        defineField({
            name: 'quickFacts',
            title: 'Quick Facts',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'value', type: 'string', title: 'Value' }
                    ]
                }
            ]
        })
    ],
})
