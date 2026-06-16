# Agentes Personales (Subsistema A) — Documento de Diseño

**Fecha:** 2026-06-16
**Estado:** Aprobado (pendiente revisión final del usuario)
**Alcance:** Subsistema A — agentes "para vos" (con tu voz, reutilizables en cualquier proyecto)
**Repo:** https://github.com/braiannav7-max/Workspace-

---

## 1. Propósito

Librería de agentes especializados con la voz del usuario, listos para usar en cualquier
proyecto. Son **definiciones/personas** (prompts), no software desplegado — baratos,
reutilizables y no envejecen.

### Alcance

**Subsistema A (este spec):** agentes que ayudan al usuario a trabajar (copywriter, asesor
comercial, analista de leads).

**Subsistema B (fuera de alcance, futuro):** agentes desplegados dentro de productos de
clientes (chatbots, soporte). Requieren infra real — se diseñan cuando entre un proyecto
concreto que los pida. Documentado en `ROADMAP.md`.

---

## 2. Arquitectura — Fuente única, doble salida

Cada agente se escribe una vez (fuente de verdad en el repo, versionada en GitHub) y se
expone en dos formatos:

- **Subagente de Claude Code** (`.claude/agents/<nombre>.md`): cabecera (`name`,
  `description`, `tools`) + persona en el cuerpo. Se invoca dentro de Claude Code.
- **Prompt portátil** (`ai/prompts/<nombre>.md`): la misma persona sin cabecera, para
  pegar en cualquier IA (ChatGPT, Claude web, etc.).

### Disponibilidad global ("listos en capas, en todos los proyectos")

`ai/INSTALAR.md` documenta el paso para copiar los subagentes del repo a `~/.claude/agents/`
(carpeta global de Claude Code). Desde ahí están disponibles en **cualquier** proyecto, no
solo este repo. El repo sigue siendo la fuente versionada; al mejorar un agente, se reinstala.

Comando de instalación:
```bash
cp .claude/agents/*.md ~/.claude/agents/
```

### Trade-off aceptado

La voz y la persona quedan duplicadas entre el subagente y el prompt portátil (los subagentes
deben ser autocontenidos). Mitigación: la voz se escribe **una sola vez** en `ai/voz.md` como
referencia canónica; si cambia, se actualiza ahí y se reembebe en los agentes.

### Estructura de carpetas

```
Workspace-/
├── ai/
│   ├── voz.md                  ← Voz de marca canónica (personalidad + idiomas)
│   ├── INSTALAR.md             ← Cómo instalar los subagentes globalmente
│   └── prompts/                ← Versión portátil
│       ├── copywriter.md
│       ├── asesor-comercial.md
│       └── analista-leads.md
└── .claude/agents/            ← Subagentes Claude Code
    ├── copywriter.md
    ├── asesor-comercial.md
    └── analista-leads.md
```

---

## 3. La voz (`ai/voz.md`)

Se escribe una vez y la comparten los 3 agentes. Separada en dos capas:

**Personalidad (independiente del idioma):**
- Persuasivo y vendedor, pero profesional y humano — con gancho y energía, sin sonar
  acartonado ni corporativo.
- Habla de beneficios antes que características. Claro, directo, cálido, con confianza.
- **NUNCA:** superlativos huecos ("el mejor del mundo", "100% garantizado"), promesas
  falsas, relleno, ni tono frío/distante.

**Idioma (parámetro):**
- 🇦🇷 **Español argentino** — de vos, modismos rioplatenses. *(default)*
- 🇧🇷 **Portugués brasileño** — você, tono brasileño natural, expresiones locales.

El agente elige el idioma según el contexto del proyecto o indicación explícita
("respondé en portugués"). La personalidad no cambia entre idiomas — solo la superficie.

---

## 4. Anatomía de un agente

Estructura del subagente (igual para los 3):

```markdown
---
name: <nombre>
description: <qué hace y cuándo usarlo>
tools: <según el agente>
---

Sos <rol en primera persona>. Escribís/respondés con MI voz (ver abajo).

## Voz
[embebida desde ai/voz.md]

## Objetivo
[un objetivo claro]

## Cómo trabajás
1. ... 2. ... 3. ...

## Restricciones
- NUNCA: [...]
- SIEMPRE: [...]

## Formato de salida
[definido por agente — ver sección 5]
```

El prompt portátil (`ai/prompts/<nombre>.md`) es idéntico pero **sin la cabecera** de frontmatter.

---

## 5. Los 3 agentes

### 5.1 `copywriter`
- **Rol:** redactor de marketing con la voz del usuario (anuncios, copy de landing, emails, hooks).
- **Recibe:** producto/servicio · audiencia · objetivo · canal · idioma (AR/BR) · longitud.
- **Devuelve:** `headline` · `subheadline` · `body` · `cta` · `variantes[]` (2-3 alternativas).
- **Tools:** Read, Write (leer contexto, guardar copys).

### 5.2 `asesor-comercial`
- **Rol:** cualifica al cliente y guía hacia el cierre, conversando.
- **Recibe:** conversa y junta nombre · negocio · presupuesto · objetivo · canal.
- **Devuelve:** lleva la charla con la voz del usuario y, al cerrar, un resumen:
  `perfil` · `objeciones detectadas` · `temperatura` · `siguiente_paso`.
- **Tools:** ninguna (solo conversa).

### 5.3 `analista-leads`
- **Rol:** recibe un lead y lo puntúa.
- **Recibe:** nombre · empresa · presupuesto · urgencia · fuente · mensaje_inicial.
- **Devuelve (JSON tipado):** `score` (1-10) · `temperatura` (frío/tibio/caliente) ·
  `perfil` · `accion_recomendada`.
- **Tools:** ninguna (solo analiza).

**Formato de salida:** `analista-leads` devuelve JSON tipado (para encadenar con
automatizaciones a futuro). `copywriter` y `asesor-comercial` devuelven texto estructurado
(más natural para leer y usar).

---

## 6. Criterio de éxito

> Instalar los 3 subagentes globalmente, abrir un proyecto cualquiera, invocar a cada uno,
> y que respondan con la voz del usuario (en español y, si se pide, en portugués),
> devolviendo lo que define su contrato de salida.

---

## 7. Decisiones registradas

- **Roster:** copywriter, asesor-comercial, analista-leads.
- **Voz:** persuasivo/vendedor + profesional/humano; bilingüe ES-AR / PT-BR.
- **Formato:** doble (subagente Claude Code + prompt portátil), fuente única en el repo.
- **Disponibilidad:** global vía instalación a `~/.claude/agents/`.
- **Subsistema B (agentes para clientes):** diferido hasta proyecto real.
- **Tools v1:** mínimas (sin herramientas externas; el copywriter usa Read/Write).
