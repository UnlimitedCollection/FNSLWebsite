import { type SchemaTypeDefinition } from 'sanity'
import { blockContent } from './blockContent'
import { category } from './category'
import { product } from './product'
import { producer } from './producer'
import { news } from './news'
import { program } from './program'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blockContent, category, product, producer, news, program],
}
