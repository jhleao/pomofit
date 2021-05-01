-- CREATE DATABASE pomofit;

-- \c pomofit

CREATE TABLE "users" (
  "id" varchar PRIMARY KEY NOT NULL,
  "google_id" varchar,
  "name" varchar NOT NULL,
  "email" varchar,
  "img" varchar,
  "xp" int DEFAULT 0,
  "theme_name" varchar DEFAULT 'light',
  "completed_count" int DEFAULT 0,
  "failed_count" int DEFAULT 0,
  "started_count" int DEFAULT 0,
  "canceled_count" int DEFAULT 0
);

CREATE TABLE "challenges" (
  "id" varchar PRIMARY KEY,
  "type" varchar NOT NULL,
  "description" varchar NOT NULL,
  "xp" int NOT NULL
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");

INSERT INTO challenges (id, type, description, xp) VALUES 
('e7462adc-37ac-458d-a28b-07581500edb6', 'body', 'Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.', 80), 
('307ce316-608e-4c29-8c4c-fb59b156eddd', 'body', 'Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.', 60), 
('06c2da9c-3265-4bab-8001-c5d550b01294', 'body', 'Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.', 70), 
('0c691423-fc85-4db7-873a-cdee63dd7e97', 'body', 'Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.', 60), 
('7d40ee30-3f32-45d5-8d41-90ead8abe4a3', 'body', 'Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.', 100), 
('0921a99e-ef74-4274-9169-eb5b531f58ef', 'body', 'Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.', 80), 
('f1919c0d-8f3a-4cdb-a100-1646870bd841', 'body', 'Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.', 50), 
('2cbba293-6f61-46d4-8edb-3f7bb666ee0d', 'body', 'Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.', 80), 
('bee07c3a-109a-412d-ad27-62a4fb3004c9', 'body', 'Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.', 90),
('ff195c4f-ef55-465f-aed5-e21d73733da3', 'eye', 'Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.', 90), 
('713f5545-4917-4a78-a42d-3889946cdf7c', 'eye', 'Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.', 140), 
('ab2a4967-7901-4e85-a17f-d0a051e8c5f5', 'eye', 'Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.', 70);