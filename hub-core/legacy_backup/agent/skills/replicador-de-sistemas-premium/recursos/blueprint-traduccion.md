# Blueprint de Traducción AniMarket

Usa esta tabla para mapear los elementos de AniMarket a tu nuevo nicho:

| Elemento AniMarket | Traducción Sugerida | Propósito |
|---|---|---|
| `Animal` | `Producto` / `Item` / `Servicio` | Entidad base de la base de datos |
| `Especie` | `Categoría` / `Marca` | Primer nivel de filtrado |
| `Raza` | `Modelo` / `Subcategoría` | Segundo nivel de filtrado |
| `AnimalGallery` | `MediaGallery` | Visualización de producto |
| `Ficha Técnica` | `Especificaciones` | Tabla de atributos (JSON/Specs) |
| `CreateAuctionModal` | `StartBiddingModal` | Conversión de venta a subasta |
| `SocialShareButtons` | `AdGenerator` | Generación de publicidad para estados |
| `SellerMiniChat` | `ContactService` | Interacción directa personalizada |

## Ejemplo: Nicho Inmuebles
- **Especie:** Tipo de propiedad (Casa, Depto, Lote).
- **Raza:** Estilo (Minimalista, Clásico, Preventa).
- **Specs:** Metros2, Habitaciones, Cocheras.
- **Validación Estricta:** Requiere Título, Precio, Dirección, 3+ Fotos y Plano (PDF).
