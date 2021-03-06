import {MdLocalPizza as icon} from 'react-icons/md'

export default {
    // Computer name
    name: 'pizza',
    // Visible Title
    title: 'Pizzas',
    type: 'document',
    icon,
    fields: [
        {
        name: 'name',
        title: 'Pizza Name',
        type: 'string',
        description: 'the name of the pizza'
    }, 
        {
        name: 'slug',
        title: 'slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 100
        }
    }, 
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true
        }
    }, 
    {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: "Price of the pizza in cents",
        validation: Rule => Rule.min(1000).max(50000)
    }, 

]
}