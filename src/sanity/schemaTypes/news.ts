import { defineField, defineType } from 'sanity'

export const news = defineType({
    name: 'news',
    title: 'News & Events',
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
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'News', value: 'news' },
                    { title: 'Event', value: 'event' },
                    { title: 'Press Release', value: 'press' }
                ]
            }
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
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
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        // Event specific fields
        defineField({
            name: 'eventDate',
            title: 'Event Date',
            type: 'datetime',
            hidden: ({ document }) => document?.type !== 'event'
        }),
        defineField({
            name: 'location',
            title: 'Event Location',
            type: 'string',
            hidden: ({ document }) => document?.type !== 'event'
        })
    ],
})
