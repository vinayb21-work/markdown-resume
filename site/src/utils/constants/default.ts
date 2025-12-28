import type { ResumeStyles } from "~/types";

export const DEFAULT_NAME = "My Resume";

export const DEFAULT_STYLES = {
  marginV: 55,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  themeColor: "#000000",
  fontCJK: {
    name: "华康宋体",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "Verdana"
  },
  fontSize: 12,
  paper: "A4"
} as ResumeStyles;

export const DEFAULT_MD_CONTENT = `
# Vinay Badhan

<span class="iconify" data-icon="tabler:phone"></span> [(+91) 8085519964](https://wa.me/11234567890)
  : <span class="iconify" data-icon="tabler:mail"></span> [vinay.badhan21@gmail.com](mailto:vinay.badhan21@gmail.com)  
  : <span class="iconify" data-icon="charm:person"></span> [Website](https://vinayb21-work.github.io/vinay-badhan/)
  : <span class="iconify" data-icon="tabler:brand-linkedin"></span> [LinkedIn](https://www.linkedin.com/in/vinay-badhan-861a40104/)  

<span class="iconify" data-icon="ic:outline-location-on"></span> Bangalore, India
  : <span class="iconify" data-icon="tabler:brand-github"></span> [Github (personal)](https://github.com/vinayb21)
  : <span class="iconify" data-icon="tabler:brand-github"></span> [Github (work)](https://github.com/vinayb21-work)    
  : <span class="iconify" data-icon="tabler:brand-medium"></span> [Medium](https://vinay-badhan21.medium.com/)  

## Summary
Hands-on senior software engineer with deep experience in building robust, scalable, and cost-efficient backend systems. Led architecture and implementation of the developer assessment platform at HackerRank, enabling 10x growth and reduced cost per workspace by ~60%. Currently building the clinical trial study SaaS platform at Medable with automated workflows, which are a mix of deterministic and AI-assisted flows with human in the loop.

## Skills
**Programming Languages:** <span class="iconify" data-icon="vscode-icons:file-type-python"></span> Python, <span class="iconify" data-icon="vscode-icons:file-type-go"></span> Golang, <span class="iconify" data-icon="vscode-icons:file-type-ruby"></span> Ruby, <span class="iconify" data-icon="vscode-icons:file-type-js-official"></span> JavaScript / <span class="iconify" data-icon="vscode-icons:file-type-typescript-official"></span> TypeScript

**Frameworks:** MCP, LangGraph, Google Agent Kit, Gin, FastAPI, ExpressJS, Ruby on Rails 

**Data:** PostgreSQL, MySQL, Apache Hudi, Spark, pgvector, Neo4j

**Infra:**: AWS, GCP, Docker, CI/CD, Terraform, ELK


**Interests:** Applied AI, Containers, Developer Platforms, Data Engineering, Engineering Management

## Experience

**Engineering Manager (Hands-on)**
  : **Medable Inc.**
  : **June 2023 - Present**

Leading automated code generation and testing platform for clinical trial study building through LLM integration and fine tuning.

***AI Platform***
- Deployed AI-powered code generation agents leveraging **custom RAG** pipelines to auto-generate study extensions, tests, and deployments
- Developed **Office 365 MCP** and tool integration for agent studio integration
-  Migrated from a custom agent engine to **Google’s ADK**, significantly boosting system reliability and reducing maintenance effort.

***Core Platform***
- Architected self-serve platform enabling sponsors and CROs to independently build and validate studies
- Transformed clinical trial study setup from a 6-month manual process to under a week through end-to-end automation
- Worked with the professional services team to understand the domain and automate all the work with deterministic workflow development
- Reversed profit margins from **-90% to +40%** per study by eliminating manual bottlenecks
- USDM spec (JSON) standard implementation to be used as the source data for the entire self-serve platform 
- Designed and developed a rule‑based evaluation engine for sending context‑aware notifications.
- Load tested all the service involved in the self serve platform and optimised servies 
- Established and scaled India-based engineering team, hiring and mentoring 6 developers

**Tech Lead**
  : **HackerRank**
  : **June 2018 - June 2023**

***IDE Infrastructure and Tooling***
- Architected multi-cloud infrastructure spanning **AWS** and **GCP** based on VMs and containers with custom machine images and background processes (with auto-recovery) for exec and IDE
- Reduced workspace costs by **~60%** across frontend, backend, and data science environments by migrating to a VM‑based IDE infrastructure.
- Delivered **~$1.5M** annual savings through strategic cloud resource optimization
- Built thin images and developed the framework to add stack specific packages to be used as machine images
- Scaled workspace concurrency **10x** while improving system reliability
- Migrated entire production traffic from older infrastructure to newer infrastructure within a month
- Designed a custom routing system and workspace architecture using Docker Compose
- Improved IDE launch‑time SLA from 80% to 95% using an intelligent provisioning layer with warm‑up strategies.
- Improved IDE‑Editor launch SLA from 93% to 99.5% by building a new IDE‑Management‑Service in Golang.
- CDN integration for IDE assets to reduce the load time and improve candidate experience
- Spearheaded editor architecture and real-time collaboration features for data science assessments

***Data team***
- Engineered real-time data pipeline processing 60M+ annual submissions with near-instant insights
- Optimized Spark jobs, reducing computation time from 24 hours to under 2 minutes by garbage collection migration to G1GC and resource finetuning
- Implemented end-to-end observability with logging, alerting, and monitoring dashboards
- Unified schema data ingestion across interview scorecards, screening scores, challenges, and hackathon

## Education

**B.Eng. in Computer Science (SGSITS, Indore)**
  : **June 2014 - April 2018**
`

export const PREVIEW_SELECTOR = "#vue-smart-pages-preview";

export const DEFAULT_CSS_CONTENT =`
/* Backbone CSS for Resume Template 1 */

/* Basic */

#vue-smart-pages-preview {
  background-color: white;
  color: black;
  text-align: left;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

#vue-smart-pages-preview p,
#vue-smart-pages-preview li,
#vue-smart-pages-preview dl {
  margin: 0;
}

/* Headings */

#vue-smart-pages-preview h1,
#vue-smart-pages-preview h2,
#vue-smart-pages-preview h3 {
  font-weight: bold;
}

#vue-smart-pages-preview h1 {
  font-size: 2.0em;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 0.25em;
}

#vue-smart-pages-preview h2,
#vue-smart-pages-preview h3 {
  margin-bottom: 0.15em;
  margin-top: 0em;
  font-size: 1.2em;
}

#vue-smart-pages-preview h1,
#vue-smart-pages-preview h2 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: darkgrey;
}

/* Lists */

#vue-smart-pages-preview ul,
#vue-smart-pages-preview ol {
  padding-left: 1.0em;
  margin: 0.2em 0 1.0em 0;
}

#vue-smart-pages-preview ul {
  list-style-type: disc;
}

#vue-smart-pages-preview ol {
  list-style-type: decimal;
}

/* Definition Lists */

#vue-smart-pages-preview dl {
  display: flex;
}

#vue-smart-pages-preview dl dt,
#vue-smart-pages-preview dl dd:not(:last-child) {
  flex: 1;
}

/* Tex */

#vue-smart-pages-preview :not(span.katex-display) > span.katex {
  font-size: 0.6em !important;
}

/* SVG & Images */

#vue-smart-pages-preview svg.iconify {
  vertical-align: -0.2em;
}

#vue-smart-pages-preview img {
  max-width: 100%;
}

/* Header */

#vue-smart-pages-preview .resume-header {
  text-align: center;
}

#vue-smart-pages-preview .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 2px;
}

#vue-smart-pages-preview .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Citations */

#vue-smart-pages-preview ul.crossref-list {
  padding-left: 0.2em;
}

#vue-smart-pages-preview li.crossref-item p {
  margin-left: 0.3em;
}

#vue-smart-pages-preview li.crossref-item::marker {
  content: attr(data-caption);
}

#vue-smart-pages-preview sup.crossref-ref {
  font-size: 90%;
  top: 0;
}

/* Dark & print mode */

.dark #vue-smart-pages-preview {
  background-color: #334155;
  color: #e5e7eb;
}

@media print {
  #vue-smart-pages-preview {
    background-color: white !important;
    color: black !important;
  }

  .dark #vue-smart-pages-preview a {
    color: black !important;
  }
}
`;