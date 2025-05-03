const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('students.proto', {});
const StudentsServicePackage = grpc.loadPackageDefinition(packageDefinition).StudentsServicePackage;

const server = new grpc.Server();

// Simuler une base de données
let students = [];
let idCounter = 1;

// Implémentation des méthodes gRPC
const addStudent = (call, callback) => {
    const student = { id: idCounter++, name: call.request.name };
    students.push(student);
    callback(null, student);
};

const getStudentById = (call, callback) => {
    const student = students.find(s => s.id === call.request.id);
    if (student) {
        callback(null, student);
    } else {
        callback({
            code: grpc.status.NOT_FOUND,
            message: "Student not found"
        });
    }
};

const getAllStudents = (call, callback) => {
    callback(null, { students });
};

// Ajouter les services au serveur
server.addService(StudentsServicePackage.StudentsService.service, {
    createStudent: addStudent,
    getStudentbyId: getStudentById,
    getAllStudents: getAllStudents
});

// Démarrer le serveur
const PORT = 50051;
server.bindAsync(`127.0.0.1:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`gRPC server running at http://127.0.0.1:${PORT}`);
    server.start();
});
