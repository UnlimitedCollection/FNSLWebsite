import { defineField, defineType } from 'sanity'

export const program = defineType({
    name: 'program',
    title: 'Program',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'theme',
            title: 'Theme',
            type: 'string',
            options: {
                list: [
                    'Training & Capacity Building',
                    'Market Access',
                    'Sustainability & Climate',
                    'Quality & Compliance',
                    'Women & Youth',
                    'Partnerships & Advocacy'
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
            name: 'overview',
            title: 'Overview',
            type: 'text',
        }),
        defineField({
            name: 'body',
            title: 'Full Details',
            type: 'blockContent',
        }),
        defineField({
            name: 'impactMetrics',
            title: 'Impact Metrics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'value', type: 'string', title: 'Value' },
                        { name: 'label', type: 'string', title: 'Label' }
                    ]
                }
            ]
        })
    ],
})
