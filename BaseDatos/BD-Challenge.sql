USE [TestCrud]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 22/09/2022 12:12:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Actividades]    Script Date: 22/09/2022 12:12:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Actividades](
	[IdActividad] [int] IDENTITY(1,1) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[Actividad] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Actividades] PRIMARY KEY CLUSTERED 
(
	[IdActividad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 22/09/2022 12:12:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](150) NOT NULL,
	[Apellido] [nvarchar](150) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[FechaNacimiento] [datetime2](7) NOT NULL,
	[Telefono] [int] NULL,
	[RecibeInfo] [bit] NOT NULL,
	[FechaBaja] [datetime2](7) NULL,
	[Pais] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20220921145707_inicio', N'6.0.9')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20220922133454_inicio', N'6.0.9')
GO
SET IDENTITY_INSERT [dbo].[Actividades] ON 

INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (2, CAST(N'2022-09-22T10:40:07.2374154' AS DateTime2), 3, N'Se creó el usuario dsad ffff')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (3, CAST(N'2022-09-22T10:47:07.3753056' AS DateTime2), 3, N'Se actualizó el usuario dsad ffff')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (4, CAST(N'2022-09-22T10:47:14.2945314' AS DateTime2), 3, N'Se actualizó el usuario dsad ffff')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (5, CAST(N'2022-09-22T10:48:15.1744610' AS DateTime2), 3, N'Se actualizó el usuario dsad vfbgf')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (6, CAST(N'2022-09-22T10:55:34.6707080' AS DateTime2), 3, N'Se eliminó el usuario dsad vfbgf')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (7, CAST(N'2022-09-22T11:04:47.1246300' AS DateTime2), 4, N'Se creó el usuario sa fdsf')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (8, CAST(N'2022-09-22T11:05:14.3388444' AS DateTime2), 4, N'Se actualizó el usuario sa fdsf')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (9, CAST(N'2022-09-22T11:06:01.5501686' AS DateTime2), 4, N'Se actualizó el usuario sa fdsf')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (10, CAST(N'2022-09-22T11:06:07.3848810' AS DateTime2), 4, N'Se actualizó el usuario sa fdsf')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (11, CAST(N'2022-09-22T11:10:40.0125025' AS DateTime2), 5, N'Se creó el usuario mica marut')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (12, CAST(N'2022-09-22T11:18:35.8288538' AS DateTime2), 6, N'Se creó el usuario juaco aucey')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (13, CAST(N'2022-09-22T11:19:14.7387208' AS DateTime2), 6, N'Se actualizó el usuario juaco auce')
INSERT [dbo].[Actividades] ([IdActividad], [FechaCreacion], [IdUsuario], [Actividad]) VALUES (14, CAST(N'2022-09-22T11:19:25.7255115' AS DateTime2), 4, N'Se eliminó el usuario sa fdsf')
SET IDENTITY_INSERT [dbo].[Actividades] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuarios] ON 

INSERT [dbo].[Usuarios] ([IdUsuario], [Nombre], [Apellido], [Email], [FechaNacimiento], [Telefono], [RecibeInfo], [FechaBaja], [Pais]) VALUES (3, N'dsad', N'vfbgf', N'dsafda@dsa.com', CAST(N'2022-09-21T00:00:00.0000000' AS DateTime2), 3, 0, CAST(N'2022-09-22T10:55:34.5300151' AS DateTime2), N'')
INSERT [dbo].[Usuarios] ([IdUsuario], [Nombre], [Apellido], [Email], [FechaNacimiento], [Telefono], [RecibeInfo], [FechaBaja], [Pais]) VALUES (4, N'sa', N'fdsf', N'gfd@dsa.com', CAST(N'2022-09-11T03:00:00.0000000' AS DateTime2), 43543, 0, CAST(N'2022-09-22T11:19:25.6115582' AS DateTime2), N'XK')
INSERT [dbo].[Usuarios] ([IdUsuario], [Nombre], [Apellido], [Email], [FechaNacimiento], [Telefono], [RecibeInfo], [FechaBaja], [Pais]) VALUES (5, N'mica', N'marut', N'mica@marut.com', CAST(N'2022-09-19T03:00:00.0000000' AS DateTime2), 544322, 1, NULL, N'MT')
INSERT [dbo].[Usuarios] ([IdUsuario], [Nombre], [Apellido], [Email], [FechaNacimiento], [Telefono], [RecibeInfo], [FechaBaja], [Pais]) VALUES (6, N'juaco', N'auce', N'jsa@auce.com', CAST(N'2022-07-19T03:00:00.0000000' AS DateTime2), 15622222, 0, NULL, N'BT')
SET IDENTITY_INSERT [dbo].[Usuarios] OFF
GO
ALTER TABLE [dbo].[Actividades]  WITH CHECK ADD  CONSTRAINT [FK_Actividades_Usuarios_IdUsuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuarios] ([IdUsuario])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Actividades] CHECK CONSTRAINT [FK_Actividades_Usuarios_IdUsuario]
GO
