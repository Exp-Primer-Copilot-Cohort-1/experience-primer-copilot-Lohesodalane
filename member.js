function skillsMember() {
    return {
        name: 'skills',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule) => Rule.required(),
    };
}
