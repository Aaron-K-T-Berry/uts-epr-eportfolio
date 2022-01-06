import { Skill } from "./index"

export const data: { skills: Skill[] } = {
  skills: [
    {
      summary: "Modern full stack web development",
      extras: [
        "✅ Latest Javascript, Typescript and ReactJs practices",
        "✅ Testing for a maintainable and scalable codebase",
        "✅ Building internal and public solutions",
      ],
    },
    {
      summary: "Developing scalable data engineering pipelines ",
      extras: [
        "✅ Developing containerized Airflow environments",
        "✅ Developing Airflow operators and plugins for custom integrations",
        "✅ Scalable data warehouse object management with DBT and Liquidbase",
      ],
    },
    {
      summary: "Building scalable and automated devops solutions",
      extras: [
        "✅ Scalable applications and deployments containers",
        "✅ Implementing infrastructure as code with ansible and terraform",
        "✅ Building CICD infrastructure on Jenkins and Github Actions",
      ],
    },
  ],
}
