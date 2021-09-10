const Intern = require("../Intern.js");

describe("Intern", () => {

    it('should take name, id, email, and Git Hub when passed', () => {
        
        const Intern1 = new Intern('Kayla A.', 888, 'KAyA@gmail.com', 'Texas A&M University - Commerce');

        expect(Intern1.name).toBe("Kayla A.");
        expect(Intern1.id).toBe(888);
        expect(Intern1.email).toBe('KAyA@gmail.com');
        expect(Intern1.school).toBe('Texas A&M University - Commerce');
    });
    
    it('should create an Intern name based on info in Intern', () => {
        
        const Intern1 = new Intern('Kayla A.', 888, 'KAyA@gmail.com', 'Texas A&M University - Commerce');
        
        const name = Intern1.getName();
        
        expect(name).toBe('Kayla A.hn');
    });
    
    it('should create Intern id based on info in Intern', () => {
        
        const Intern1 = new Intern('Kayla A.', 888, 'KAyA@gmail.com', 'Texas A&M University - Commerce');
        
        const id = Intern1.getId();
        
        expect(id).toBe(888);
        
    });

    it('should create intern email based on info in Intern', () => {

        const Intern1 = new Intern('Kayla A.', 888, 'KAyA@gmail.com', 'Texas A&M University - Commerce');
        
        Intern1.getEmail();

        expect(email).toBe('KAyA@gmail.com');
    });

    it('should create intern school based on info in Intern', () => {

        const Intern1 = new Intern('Kayla A.', 888, 'KAyA@gmail.com', 'Texas A&M University - Commerce');

        Intern1.getSchool();

        expect(school).toBe('Texas A&M University - Commerce');
    });

});     