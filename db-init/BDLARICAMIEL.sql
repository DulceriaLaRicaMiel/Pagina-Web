-- Tabla USUARIOS
CREATE TABLE USUARIOS(
    IdUsuario SERIAL,
    Correo VARCHAR(60) UNIQUE NOT NULL,
    Contrasenia VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY (IdUsuario)   
);

-- Crear extensión para encriptación
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Insertar usuarios de ejemplo
INSERT INTO USUARIOS (Correo, Contrasenia)
VALUES 
    ('admin@laricamiel.com', PGP_SYM_ENCRYPT('admin123', 'AES_KEY')),
    ('cajero@laricamiel.com', PGP_SYM_ENCRYPT('cajero123', 'AES_KEY')),
    ('inventario@laricamiel.com', PGP_SYM_ENCRYPT('inventario123', 'AES_KEY')),
    ('cliente1@laricamiel.com', PGP_SYM_ENCRYPT('cliente123', 'AES_KEY'));

-- Tabla CLIENTES 
CREATE TABLE CLIENTES (
    IdCliente SERIAL PRIMARY KEY,
    Nombre VARCHAR(40) NOT NULL,
    ApPaterno VARCHAR(40) NOT NULL,
    ApMaterno VARCHAR(40),
    Telefono BIGINT UNIQUE NOT NULL,
    Correo VARCHAR(60) UNIQUE NOT NULL,
    Contrasenia VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Insertar clientes de ejemplo 
INSERT INTO CLIENTES (Nombre, ApPaterno, ApMaterno, Telefono, Correo, Contrasenia)
VALUES
('María', 'González', 'Pérez', 2711234567, 'maria.gonzalez@example.com', PGP_SYM_ENCRYPT('cliente123', 'AES_KEY')),
('Juan', 'López', 'Martínez', 2712345678, 'juan.lopez@example.com', PGP_SYM_ENCRYPT('cliente456', 'AES_KEY')),
('Ana', 'Rodríguez', 'Gloria', 2713456789, 'ana.rodriguez@example.com', PGP_SYM_ENCRYPT('cliente789', 'AES_KEY'));

-- Tabla EMPLEADOS
CREATE TABLE EMPLEADOS (	
    IdEmpleado SERIAL,
    Nombre VARCHAR(40) NOT NULL,
    ApPaterno VARCHAR(40) NOT NULL,
    ApMaterno VARCHAR(40),
    Telefono BIGINT UNIQUE NOT NULL,
    NSS VARCHAR(11) UNIQUE NOT NULL,
    RFC VARCHAR(13) UNIQUE NOT NULL,
    Correo VARCHAR(60) UNIQUE NOT NULL,
    Contrasenia VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY (IdEmpleado)
);

-- Insertar empleados de ejemplo
INSERT INTO EMPLEADOS(Nombre, ApPaterno, ApMaterno, Telefono, NSS, RFC, Correo, Contrasenia)  
VALUES 
('Carlos', 'Martínez', 'Gómez', 2714567890, '12345678912', 'MAGC800101H23', 'carlos.martinez@laricamiel.com', PGP_SYM_ENCRYPT('empleado123', 'AES_KEY')),
('Laura', 'Hernández', 'Flores', 2715678901, '98765432101', 'HELL750202M45', 'laura.hernandez@laricamiel.com', PGP_SYM_ENCRYPT('empleado456', 'AES_KEY')),
('Pedro', 'Sánchez', 'Díaz', 2716789012, '56789012345', 'SAPD851010H67', 'pedro.sanchez@laricamiel.com', PGP_SYM_ENCRYPT('empleado789', 'AES_KEY'));

-- Tabla ADMINISTRADOR
CREATE TABLE ADMINISTRADOR (	
    IdAdministrador SERIAL,
    Nombre VARCHAR(40) NOT NULL,
    ApPaterno VARCHAR(40) NOT NULL,
    ApMaterno VARCHAR(40),
    Telefono BIGINT UNIQUE NOT NULL,
    Correo VARCHAR(60) UNIQUE NOT NULL,
    Contrasenia VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY (IdAdministrador)
);

-- Tabla PRODUCTOS
CREATE TABLE PRODUCTOS (
    IdProducto SERIAL,
    Nombre VARCHAR(50) NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    Descripcion TEXT NOT NULL,
    STOCK INTEGER NOT NULL,
    Categoria VARCHAR(50) NOT NULL,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY (IdProducto)
);

-- Insertar productos de dulcería
INSERT INTO PRODUCTOS (Nombre, Precio, Descripcion, STOCK, Categoria)
VALUES
    ('Ate de Guayaba', 45.50, 'Ate tradicional de guayaba 250g', 100, 'Dulces tradicionales'),
    ('Cajeta de Celaya', 60.00, 'Cajeta artesanal 250g', 75, 'Dulces tradicionales'),
    ('Chocolate Amargo', 55.00, 'Tableta de chocolate 70% cacao 100g', 50, 'Chocolates'),
    ('Mermelada de Fresa', 48.00, 'Mermelada casera 250g', 60, 'Conservas'),
    ('Turrones de Almendra', 35.00, 'Paquete con 6 turrones', 120, 'Dulces tradicionales'),
    ('Caja de Regalo Surpresa', 150.00, 'Caja con surtido de dulces', 30, 'Regalos');

-- Tabla VENTAS
CREATE TABLE VENTAS (
    IdVenta SERIAL,
    IdCliente INT REFERENCES CLIENTES(IdCliente) ON DELETE SET NULL,
    IdEmpleado INT REFERENCES EMPLEADOS(IdEmpleado) ON DELETE SET NULL,
    Cliente VARCHAR(50) NOT NULL,
    FechaVenta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Hora TIME NOT NULL,
    Total DECIMAL(10,2) NOT NULL,
    MetodoPago VARCHAR(20) NOT NULL,      
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY (IdVenta)
);

-- Insertar ventas de ejemplo 
INSERT INTO VENTAS (IdCliente, IdEmpleado, Cliente, FechaVenta, Hora, Total, MetodoPago) VALUES
(1, 2, 'Zahid', '2023-11-15', '10:30:00', 145.50, 'EFECTIVO'),
(2, 2, 'Angel', '2023-11-15', '11:45:00', 95.00, 'TARJETA'),
(3, 3, 'Amelia', '2023-11-16', '09:15:00', 210.00, 'EFECTIVO'),
(1, 1, 'Luis', '2023-11-17', '14:20:00', 150.00, 'TRANSFERENCIA');

-- Tabla DetalleVentas 
CREATE TABLE DetalleVentas (
    IdDetalleVenta SERIAL,
    IdVenta INT NOT NULL,
    IdProducto INT NOT NULL,
    Cantidad INTEGER NOT NULL,
    PrecioUnitario DECIMAL(10,2) NOT NULL,  
    Subtotal DECIMAL(10,2) NOT NULL,       
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY (IdDetalleVenta),
    FOREIGN KEY (IdVenta) REFERENCES VENTAS (IdVenta) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (IdProducto) REFERENCES PRODUCTOS (IdProducto) ON UPDATE CASCADE ON DELETE RESTRICT
);

-- Insertar detalles de venta
INSERT INTO DetalleVentas (IdVenta, IdProducto, Cantidad, PrecioUnitario, Subtotal) VALUES
(1, 1, 2, 45.50, 91.00),
(1, 3, 1, 55.00, 55.00),
(2, 2, 1, 60.00, 60.00),
(2, 5, 1, 35.00, 35.00),
(3, 6, 1, 150.00, 150.00),
(3, 4, 2, 48.00, 96.00),
(4, 6, 1, 150.00, 150.00);

-- Insertar usuario a cliente 
DO $$
DECLARE
    usuario_id INT;
BEGIN
    INSERT INTO USUARIOS (Correo, Contrasenia)
    VALUES ('nuevo.cliente@ejemplo.com', PGP_SYM_ENCRYPT('nuevocliente123', 'AES_KEY'))
    RETURNING IdUsuario INTO usuario_id;

    INSERT INTO CLIENTES (IdUsuario, Nombre, ApPaterno, Telefono, Correo, Contrasenia)
    VALUES (usuario_id, 'Roberto', 'Sánchez', 2719876543, 'roberto.sanchez@ejemplo.com', PGP_SYM_ENCRYPT('cliente789', 'AES_KEY'));
END $$;

-- Insertar usuario a empleado
DO $$
DECLARE
    usuario_id INT;
BEGIN
    INSERT INTO USUARIOS (Correo, Contrasenia)
    VALUES ('nuevo.empleado@laricamiel.com', PGP_SYM_ENCRYPT('nuevoempleado123', 'AES_KEY'))
    RETURNING IdUsuario INTO usuario_id;

    INSERT INTO EMPLEADOS (IdUsuario, Nombre, ApPaterno, Telefono, NSS, RFC, Correo, Contrasenia, Puesto)
    VALUES (usuario_id, 'Sofía', 'Ramírez', 2718765432, '34567890123', 'RAMS900505M56', 'sofia.ramirez@laricamiel.com', PGP_SYM_ENCRYPT('empleado321', 'AES_KEY'), 'Vendedor');
END $$;
