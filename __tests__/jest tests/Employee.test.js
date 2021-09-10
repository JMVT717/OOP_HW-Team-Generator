const Employee = require("../Classes/Employee");

describe("Employee",() => {
    it('should take name, id, and email when passed', () => {
        
        const employee1 = new Employee('Jo', 555, 'jo@gmail.com');

        expect(employee1.name).toBe("Jo");
        expect(employee1.id).toBe(555);
        expect(employee1.email).toBe('jo@gmail.com');
    });
    
    it('should create an employee name based on info in Employee', () => {
        
        const employee1 = new Employee('Jo', 555, 'jo@gmail.com');
        
        const name = employee1.getName();
        
        expect(name).toBe('john');
    });
    
    it('should create employee id based on info in Employee', () => {
        
        const employee1 = new Employee('Jo', 555, 'jo@gmail.com');
        
        const id = employee1.getId();
        
        expect(id).toBe(555);
        
    });

    it('should create employee email based on info in Employee', () => {
        const employee1 = new Employee('Jo', 555, 'jo@gmail.com');

        const email = employee1.getEmail();

        expect(email).toBe('jo@gmail.com');
    });
}); 