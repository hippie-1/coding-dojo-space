export function Book(category, writer, title) {
    this.category = category;
    this.writer = writer;
    this.title = title;
}

export const arrayOfBooks = [
    {category: 'tortenelem', writer: 'Stendhal', title: 'Europa'},
    {category: 'szepirodalom', writer: 'Petofi', title: 'Nemzeti dal'},
    {category: 'krimi', writer: 'Austen', title: 'Tiz kicsi neger'},
    {category: 'gyerekkonyv', writer: 'Weores', title: 'Bobita'},
    {category: 'lektur', writer: 'Naray', title: 'Zara'}
]
