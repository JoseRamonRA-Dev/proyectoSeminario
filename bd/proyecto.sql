use empatines;
create database empatines; 

create table Responsable(
	ID smallint not null auto_increment,
	Nombre char(30) not null,
	Apellido_P char(20) not null,
	Apellido_M char(20),
    correo char(60),
	Telefono  numeric(10),
    ID_Org smallint not null,
	foreign key (ID_Org)
	references Organizacion(ID),
    primary key (ID)
);

create table Organizacion(
ID smallint not null auto_increment,
Nombre char(30) not null,
Calle char(35),
Colonia char(20),
CP numeric(5),
Ciudad char(20),
Estado char(20) not null,
Telefono  numeric(10),
primary key (ID)
);

create table Persona(
ID smallint not null auto_increment,
Nombre char(30) not null,
Apellido_P char(20) not null,
Apellido_M char(20),
Fecha_Nac date not null,
correo char(60),
contraseña char(15),
Telefono  numeric(10),
ID_Org smallint not null,
foreign key (ID_Org)
	references Organizacion(ID),
ID_Resp smallint not null,
foreign key (ID_Resp)
	references Responsable(ID),
primary key (ID)
);

create table perfil(
	ID smallint not null auto_increment,
	Resultado char(40) not null,
    Fecha_Nac date not null,
    ID_persona smallint not null,
	foreign key (ID_persona)
		references Persona(ID),
	primary key(ID)
);

select * from perfil;








