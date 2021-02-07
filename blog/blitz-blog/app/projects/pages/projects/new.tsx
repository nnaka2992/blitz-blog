import Layout from "app/layouts/Layout"
import { Head, Link, useRouter, useSession, BlitzPage } from "blitz"
import createProject from "app/projects/mutations/createProject"
import { ProjectForm } from "app/projects/components/ProjectForm"

const NewProjectPage: BlitzPage = () => {
    const router = useRouter()
    const session = useSession()

    return (
        <div>
          <Head>
            <title>New Project</title>
          </Head>
          <main>
            <h1>Create New Project</h1>
            <ProjectForm
               initailValues={{ name: "", text: "" }}
               onSubmit={async (values) => {
                   try {
                       const project = await createProject({
                           data: {
                               ...values,
                           },
                       })
                       router.push("[projectId]", `${project.id}`)
                   } catch (error) {
                       alert("Error creating project " + JSON.stringify(error, null, 2))
                   }
               }}
            />
            <p>
              <Link href="./">
                <a>Projects</a>
              </Link>
            </p>
          </main>
        </div>
    )
}

NewProjectPage.getLayout = (page) => <Layout title={"Create New Project"}>{page}</Layout>

export default NewProjectPage
