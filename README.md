# 🛠️ Students API with Node.js & gRPC  

## 📌 Overview  
This project is a **gRPC-based API** built with **Node.js** that allows users to manage student data efficiently. It includes features for **creating, retrieving, and listing students** using gRPC communication.

---

## 🚀 Features  
✅ **Get All Students** – Retrieve a list of all registered students.  
✅ **Add a New Student** – Add a student to the database using `addStudent`.  
✅ **Get Student by ID** – Fetch student details using `getStudentById`.  
✅ **Efficient Binary Communication** – Uses **gRPC** for fast & optimized data exchange over HTTP/2.  
✅ **Postman Testing** – Can be tested via Postman with **gRPC endpoints**.  

---

## 📂 Project Structure  
```bash
.
├── students.proto  # Protocol Buffer definitions
├── server.js       # gRPC Server implementation
├── client.js       # gRPC Client implementation
├── package.json    # Project dependencies
├── README.md       # Documentation
```
🔧 Installation & Setup

Step 1: Clone the Repository
```bash
git clone https://github.com/Youbey/students-api-grpc.git
cd students-api-grpc
```
Step 2: Install Dependencies
```bash
npm install
```
Step 3: Run the gRPC Server
```bash
node server.js
```
Step 4: Run the Client
```bash
npm client.js
```
---
📡 API Endpoints

📌 Add a Student

📌 gRPC Method: `addStudent` 📌 Request:
```json
{
  "name": "Alice"
}
```
📌 Response:
```json
{
  "id": 1,
  "name": "Alice"
}
```
---
📌 Get Student by ID

📌 gRPC Method: `getStudentById` 📌 Request:
```json
{
  "id": 1
}
```
📌 Response:
```json
{
  "id": 1,
  "name": "Alice"
}
```
---
📌 Get All Students

📌 gRPC Method: `getAllStudents` 📌 Response:
```json
{
  "students": [
    {
      "id": 1,
      "name": "Alice"
    },
    {
      "id": 2,
      "name": "Bob"
    }
  ]
}

```
---
🛠️ Testing with Postman

You can test the API using Postman by selecting gRPC requests and using the endpoint:
```
grpc://127.0.0.1:50051
```
Import students.proto and call the method you want. 

---
📊 Analyzing gRPC Requests with Wireshark

To inspect gRPC messages, follow these steps: 1️⃣ Open Wireshark and start capturing traffic on localhost. 2️⃣ Set Protobuf search paths in Wireshark preferences. 3️⃣ Filter traffic using:
```
tcp.port == 50051
```
