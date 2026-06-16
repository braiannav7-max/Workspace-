# Instalar los agentes globalmente

Los agentes viven en este repo (fuente de verdad). Para usarlos en **cualquier** proyecto abierto con Claude Code, copialos a la carpeta global de subagentes:

```bash
# Desde la raíz del workspace:
mkdir -p ~/.claude/agents
cp .claude/agents/*.md ~/.claude/agents/
```

Listo: ahora `copywriter`, `asesor-comercial` y `analista-leads` están disponibles en todos tus proyectos. Cuando mejorés un agente en el repo, volvé a correr el `cp` para reinstalar.

## Uso portátil (otras IAs)
Si querés usarlos fuera de Claude Code (ChatGPT, Claude web), abrí el archivo correspondiente en `ai/prompts/` y pegá su contenido como system prompt / primer mensaje.
