-- 0️⃣ Truncar las tablas para eliminar toda la data
TRUNCATE TABLE products RESTART IDENTITY CASCADE;
TRUNCATE TABLE brands RESTART IDENTITY CASCADE;
TRUNCATE TABLE categories RESTART IDENTITY CASCADE;
TRUNCATE TABLE inventory RESTART IDENTITY CASCADE;
-- Reiniciar las secuencias
ALTER SEQUENCE categories_id_seq RESTART WITH 1;
ALTER SEQUENCE brands_id_seq RESTART WITH 1;
ALTER SEQUENCE products_id_seq RESTART WITH 1;
ALTER SEQUENCE inventory_id_seq RESTART WITH 1;

-- 1️⃣ Insertar Categorías
INSERT INTO categories (nombre, descripcion) VALUES 
('Medicamentos', 'Fármacos para diversas enfermedades'),
('Suplementos', 'Vitaminas y suplementos nutricionales'),
('Cuidado Personal', 'Productos para higiene y cuidado corporal'),
('Dermatología', 'Cremas y lociones para la piel'),
('Salud Digestiva', 'Productos para el sistema digestivo'),
('Alivio del Dolor', 'Medicinas para el dolor'),
('Salud Respiratoria', 'Tratamientos para el sistema respiratorio'),
('Óptica', 'Gotas para los ojos y productos oftálmicos'),
('Homeopatía', 'Medicinas naturales y terapias alternativas'),
('Equipos Médicos', 'Termómetros, tensiómetros y más');

-- 2️⃣ Insertar Marcas
INSERT INTO brands (nombre) VALUES 
('Bayer'),
('Pfizer'),
('GSK'),
('Novartis'),
('Sanofi');

-- 3️⃣ Insertar Productos (50 productos aleatorios)
INSERT INTO products (nombre, descripcion, categorie_id, brand_id, precio, sku, imagen, estado) VALUES
('Melatonina 5mg', 'Regula el ciclo del sueño', 2, 1, 15.99, 'SKU031', 'melatonina.jpg', 'activo'),
('Gel Antibacterial', 'Elimina el 99.9% de gérmenes', 3, 2, 3.50, 'SKU032', 'gel_antibacterial.jpg', 'activo'),
('Vitamina D3', 'Mejora la absorción de calcio', 2, 3, 12.99, 'SKU033', 'vitamina_d3.jpg', 'activo'),
('Desinflamante Muscular', 'Alivio rápido para lesiones deportivas', 6, 4, 18.50, 'SKU034', 'desinflamante.jpg', 'activo'),
('Aspirina 500mg', 'Analgésico y antipirético', 6, 5, 2.99, 'SKU035', 'aspirina.jpg', 'activo'),
('Jabón Antibacterial', 'Limpieza profunda para la piel', 3, 1, 4.75, 'SKU036', 'jabon_antibacterial.jpg', 'activo'),
('Colágeno Hidrolizado', 'Fortalece la piel y articulaciones', 2, 2, 29.99, 'SKU037', 'colageno.jpg', 'activo'),
('Crema para Pies', 'Hidratación y reparación intensa', 4, 3, 8.25, 'SKU038', 'crema_pies.jpg', 'activo'),
('Dextrosa en Polvo', 'Energía rápida para atletas', 2, 4, 9.99, 'SKU039', 'dextrosa.jpg', 'activo'),
('Termómetro Digital', 'Medición precisa y rápida', 10, 5, 25.99, 'SKU040', 'termometro_digital.jpg', 'activo'),
('Pastillas para la Gripe', 'Alivio de síntomas gripales', 7, 1, 6.50, 'SKU041', 'gripe.jpg', 'activo'),
('Té Verde en Cápsulas', 'Antioxidante natural', 2, 2, 14.99, 'SKU042', 'te_verde.jpg', 'activo'),
('Crema Antiacné', 'Reduce granos y espinillas', 4, 3, 10.75, 'SKU043', 'crema_antiacne.jpg', 'activo'),
('Aceite de Pescado', 'Rico en Omega-3 para el corazón', 2, 4, 22.50, 'SKU044', 'aceite_pescado.jpg', 'activo'),
('Bicarbonato de Sodio', 'Regula la acidez estomacal', 5, 5, 3.25, 'SKU045', 'bicarbonato.jpg', 'activo'),
('Pomada para Quemaduras', 'Regenera la piel tras quemaduras leves', 4, 1, 7.99, 'SKU046', 'pomada_quemaduras.jpg', 'activo'),
('Compresas Frías', 'Alivio inmediato para inflamaciones', 10, 2, 12.99, 'SKU047', 'compresas.jpg', 'activo'),
('Jarabe Multivitamínico', 'Vitaminas esenciales para niños', 2, 3, 16.50, 'SKU048', 'jarabe_multivitaminico.jpg', 'activo'),
('Protector Solar SPF 50', 'Protección contra rayos UV', 4, 4, 19.99, 'SKU049', 'protector_solar.jpg', 'activo'),
('Inhalador para Asma', 'Alivio rápido para problemas respiratorios', 7, 5, 28.99, 'SKU050', 'inhalador.jpg', 'activo'),
('Paracetamol 500mg', 'Alivia el dolor y la fiebre', 1, 1, 2.50, 'SKU001', 'paracetamol.jpg', 'activo'),
('Vitamina C 1000mg', 'Refuerza el sistema inmunológico', 2, 2, 10.99, 'SKU002', 'vitamina_c.jpg', 'activo'),
('Ibuprofeno 400mg', 'Antiinflamatorio y analgésico', 6, 3, 3.75, 'SKU003', 'ibuprofeno.jpg', 'activo'),
('Proteína Whey', 'Suplemento proteico para deportistas', 2, 4, 35.99, 'SKU004', 'proteina.jpg', 'activo'),
('Crema Hidratante', 'Cuidado para piel seca', 3, 5, 14.99, 'SKU005', 'crema_hidratante.jpg', 'activo'),
('Omeprazol 20mg', 'Tratamiento para la acidez estomacal', 5, 1, 5.99, 'SKU006', 'omeprazol.jpg', 'activo'),
('Loratadina 10mg', 'Antihistamínico para alergias', 7, 2, 8.50, 'SKU007', 'loratadina.jpg', 'activo'),
('Gotas Oculares', 'Lubricante ocular para ojos secos', 8, 3, 6.99, 'SKU008', 'gotas_oculares.jpg', 'activo'),
('Tensiómetro Digital', 'Mide la presión arterial con precisión', 10, 4, 45.00, 'SKU009', 'tensiometro.jpg', 'activo'),
('Jarabe para la Tos', 'Alivio de la congestión y la tos', 7, 5, 9.50, 'SKU010', 'jarabe_tos.jpg', 'activo'),
('Multivitamínico Complejo B', 'Energía y bienestar diario', 2, 1, 12.99, 'SKU011', 'multivitaminico.jpg', 'activo'),
('Ácido Hialurónico', 'Regenera la piel y reduce arrugas', 4, 2, 29.99, 'SKU012', 'acido_hialuronico.jpg', 'activo'),
('Antibiótico Amoxicilina', 'Tratamiento para infecciones bacterianas', 1, 3, 18.75, 'SKU013', 'amoxicilina.jpg', 'activo'),
('Glucosamina', 'Suplemento para articulaciones', 2, 4, 22.50, 'SKU014', 'glucosamina.jpg', 'activo'),
('Spray Nasal', 'Alivia la congestión nasal', 7, 5, 7.99, 'SKU015', 'spray_nasal.jpg', 'activo'),
('Áloe Vera Gel', 'Hidratación y alivio para la piel', 4, 1, 8.99, 'SKU016', 'aloe_vera.jpg', 'activo'),
('Termómetro Infrarrojo', 'Mide la temperatura sin contacto', 10, 2, 32.99, 'SKU017', 'termometro.jpg', 'activo'),
('Suero Oral', 'Rehidratación en casos de diarrea', 5, 3, 4.99, 'SKU018', 'suero_oral.jpg', 'activo'),
('Analgésico Naproxeno', 'Alivio del dolor muscular', 6, 4, 9.25, 'SKU019', 'naproxeno.jpg', 'activo'),
('Colirio Antialérgico', 'Tratamiento para irritación ocular', 8, 5, 11.99, 'SKU020', 'colirio.jpg', 'activo'),
('Omega 3', 'Salud cardiovascular y cerebral', 2, 1, 19.50, 'SKU021', 'omega3.jpg', 'activo'),
('Crema para Manos', 'Hidratación profunda para la piel', 3, 2, 5.99, 'SKU022', 'crema_manos.jpg', 'activo'),
('Antiséptico Bucal', 'Protección contra bacterias en la boca', 3, 3, 6.50, 'SKU023', 'antiseptico.jpg', 'activo'),
('Leche de Magnesia', 'Alivio del estreñimiento', 5, 4, 7.50, 'SKU024', 'leche_magnesia.jpg', 'activo'),
('Proteína Vegana', 'Suplemento proteico sin lácteos', 2, 5, 36.50, 'SKU025', 'proteina_vegana.jpg', 'activo'),
('Crema Antiarrugas', 'Reduce líneas de expresión', 4, 1, 27.99, 'SKU026', 'crema_antiarrugas.jpg', 'activo'),
('Vendas Elásticas', 'Soporte para lesiones musculares', 10, 2, 3.99, 'SKU027', 'vendas.jpg', 'activo'),
('Enjuague Bucal', 'Refrescante y antibacteriano', 3, 3, 8.25, 'SKU028', 'enjuague.jpg', 'activo'),
('Carbón Activado', 'Desintoxicante natural', 5, 4, 9.99, 'SKU029', 'carbon_activado.jpg', 'activo'),
('Ginseng', 'Energía y rendimiento físico', 2, 5, 23.99, 'SKU030', 'ginseng.jpg', 'activo');

-- 4️⃣ Insertar Inventarios
INSERT INTO inventory (cantidad, stock_minimo, product_id) VALUES
(30, 5, 1),
(50, 5, 2),
(70, 5, 3),
(40, 5, 4),
(30, 5, 5),
(50, 5, 6),
(70, 5, 7),
(40, 5, 8),
(30, 5, 9),
(50, 5, 10),
(70, 5, 11),
(40, 5, 12),
(30, 5, 13),
(50, 5, 14),
(70, 5, 15),
(40, 5, 16),
(30, 5, 17),
(50, 5, 18),
(70, 5, 19),
(40, 5, 20),
(30, 5, 21),
(50, 5, 22),
(70, 5, 23),
(40, 5, 24),
(30, 5, 25),
(50, 5, 26),
(70, 5, 27),
(40, 5, 28),
(30, 5, 29),
(50, 5, 30),
(70, 5, 31),
(40, 5, 32),
(30, 5, 33),
(50, 5, 34),
(70, 5, 35),
(40, 5, 36),
(30, 5, 37),
(50, 5, 38),
(70, 5, 39),
(40, 5, 40),
(30, 5, 41),
(50, 5, 42),
(70, 5, 43),
(40, 5, 44),
(30, 5, 45),
(50, 5, 46),
(70, 5, 47),
(40, 5, 48),
(30, 5, 49),
(50, 5, 50);

-- 5️⃣ ( Actualizar la relación en productos
UPDATE products
SET inventory_id = inventory.id
FROM inventory
WHERE products.id = inventory.product_id;