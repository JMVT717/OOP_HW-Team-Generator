const Manager = require("../Manager.js");

describe("Manager", () => {

    it('should take name, id, email, and Git Hub when passed', () => {
        
        const Manager1 = new Manager('Mackenzie C.', 444, 'MackC@gmail.com', '1010');

        expect(Manager1.name).toBe("Mackenzie C.");
        expect(Manager1.id).toBe(444);
        expect(Manager1.email).toBe('MackC@gmail.com');
        expect(Manager1.school).toBe('1010');
    });
    
    it('should create an Manager name based on info in Manager', () => {
        
        const Manager1 = new Manager('Mackenzie C.', 444, 'MackC@gmail.com', '1010');
        
        const name = Manager1.getName();
        
        expect(name).toBe('Mackenzie C.hn');
    });
    
    it('should create Manager id based on info in Manager', () => {
        
        const Manager1 = new Manager('Mackenzie C.', 444, 'MackC@gmail.com', '1010');
        
        const id = Manager1.getId();
        
        expect(id).toBe(444);
        
    });

    it('should create Manager email based on info in Manager', () => {

        const Manager1 = new Manager('Mackenzie C.', 444, 'MackC@gmail.com', '1010');
        
        Manager1.getEmail();

        expect(email).toBe('MackC@gmail.com');
    });

    it('should create Manager school based on info in Manager', () => {

        const Manager1 = new Manager('Mackenzie C.', 444, 'MackC@gmail.com', '1010');

        Manager1.getOfficeNumber();

        expect(OfficeNumber).toBe('1010');
    });

});