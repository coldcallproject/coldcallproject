export const getMentors = (theme) => {
    switch (theme) {
        case 'premium':
            return [
                'Eric Schmidt',
                'Mark Zuckerberg',
                'Larry Page',
                'Elon Musk',
                'Bill Gates',
            ]
        case 'cartoon characters':
            return [
                'Pikachu',
                'Snoopy',
                'Elsa',
                'Garfield',
                'Donald Duck',
                'Doraemon',
                'Genie',
            ]
        default:
            return []
    }
}
