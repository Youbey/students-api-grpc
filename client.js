const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the .proto file
const packageDefinition = protoLoader.loadSync('students.proto', {});
const StudentsServicePackage = grpc.loadPackageDefinition(packageDefinition).StudentsServicePackage;

// Create the gRPC client
const client = new StudentsServicePackage.StudentsService(
    'localhost:50051',
    grpc.credentials.createInsecure()
);

// Add a new student
client.createStudent({ name: 'Alice' }, (err, response) => {
    if (err) {
        console.error('Error adding student:', err);
        return;
    }
    console.log('New Student Added:', response);
});

// Get a student by ID
client.getStudentbyId({ id: 1 }, (err, response) => {
    if (err) {
        console.error('Error retrieving student:', err);
        return;
    }
    console.log('Student Retrieved:', response);
});

// Get all students
client.getAllStudents({}, (err, response) => {
    if (err) {
        console.error('Error retrieving all students:', err);
        return;
    }
    console.log('All Students:', response.students);
});
