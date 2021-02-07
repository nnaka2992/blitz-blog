import React from "react"
import { LabeledTextField } from "app/components/LabeledTextField"
import { Form } from "app/components/Form"
import { Textarea } from "@chakra-ui/react"
import * as z from "zod"

const ProjectInput = z.object({
    name: z.string(),
    text: z.string(),
})

type ProjectInputType = z.infer<typeof ProjectInput>

export const ProjectForm = ({initialValues, onSubmit}: {
    initialValues: ProjectInputType, onSubmit}) => {
        return (
            <Form<ProjectInputType>
              submitText="Create Project"
              schema={ProjectInput}
              initialValues={initialValues}
              onSubmit={(values) => {onSubmit(values)}}
            >
              <LabeledTextField
                  name="name"
                  label="name"
                  placeholder="name"
              />
              <textarea
                  name="text"
                  label="text"
                  placeholder="text"
              />
              <br />
            </Form>
        )
    }

export default ProjectForm
