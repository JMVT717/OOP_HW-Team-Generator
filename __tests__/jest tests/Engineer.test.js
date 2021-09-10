const Engineer = require("../Engineer");

describe(Engineer, () => {

    it('should take name, id, email, and Git Hub when passed', () => {
        
        const engineer1 = new Employee('Delia', 777, 'DW@gmail.com', 'Delia7Wallace');

        expect(engineer1.name).toBe("Delia");
        expect(engineer1.id).toBe(777);
        expect(engineer1.email).toBe('DW@gmail.com');
        expect(engineer1.gitHub).toBe('Delia7Wallace');
    });
    
    it('should create an engineer name based on info in Engineer', () => {
        
        const engineer1 = new Employee('Delia', 777, 'DW@gmail.com', 'Delia7Wallace');
        
        const name = engineer1.getName();
        
        expect(name).toBe('Delia');
    });
    
    it('should create engineer id based on info in Engineer', () => {
        
        const engineer1 = new Employee('Delia', 777, 'DW@gmail.com', 'Delia7Wallace');
        
        const id = engineer1.getId();
        
        expect(id).toBe(777);
        
    });

    it('should create employee email based on info in Engineer', () => {

        const engineer1 = new Employee('Delia', 777, 'DW@gmail.com', 'Delia7Wallace');

        const email = engineer1.getEmail();

        expect(email).toBe('DW@gmail.com');
    });

    it('should create engineer git hub based on info in Engineer', () => {

        const engineer1 = new Employee('Delia', 777, 'DW@gmail.com', 'Delia7Wallace');

        const gitHub = engineer1.getGithub();

        expect(gitHub).toBe('Delia7Wallace');
    })
}); 