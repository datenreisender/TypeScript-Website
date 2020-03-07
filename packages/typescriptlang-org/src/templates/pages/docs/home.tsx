import React from "react"
import { Layout } from "../../../components/layout"

import "../css/documentation.scss"
import { ButtonGrid } from "../../../components/display/ButtonGrid"
import { Intl } from "../../../components/Intl"

import { docCopy } from "../../../copy/en/documentation"
import { createInternational } from "../../../lib/createInternational"
import { useIntl } from "react-intl"
import { graphql } from "gatsby"
import { DocsHomeQuery } from "../../../__generated__/gatsby-types"
type Props = {
  data: DocsHomeQuery
  pageContext: any
}

const Index: React.FC<Props> = (props) => {
  const i = createInternational<typeof docCopy>(useIntl())
  return (
    <Layout
      title={i("doc_layout_title")}
      description="Find TypeScript starter projects: from Angular to React or Node.js and CLIs."
      lang={props.pageContext.lang}
      allSitePage={props.data.allSitePage}
    >
      <div id="documentation" className="raised main-content-block">
        <h1>{i("doc_headline")}</h1>

        <ButtonGrid
          buttons={[
            {
              title: i("doc_headline_ts_for_js_title"),
              href: "/docs/handbook/typescript-in-5-minutes.html",
              blurb: i("doc_headline_ts_for_js_blurb"),
            },
            {
              title: i("doc_headline_ts_first_title"),
              href: "/docs/handbook/typescript-from-scratch.html",
              blurb: i("doc_headline_ts_first_blurb"),
            },
            {
              title: i("doc_headline_handbook_title"),
              href: "/docs/handbook/basic-types.html",
              blurb: i("doc_headline_handbook_blurb"),
            },
            {
              title: i("doc_headline_examples_title"),
              href: "/play?#show-examples",
              blurb: i("doc_headline_examples_blurb"),
            },
          ]}
          headline={true}
        />

        <h1>{i("doc_start_a_project")}</h1>
        <p>{i("doc_start_a_project_desc")}</p>

        <h2>{i("doc_node_npm")}</h2>
        <ButtonGrid
          buttons={[
            {
              href: "https://github.com/jaredpalmer/tsdx#readme",
              blurb: i("doc_node_npm_tsdx_blurb"),
              title: "TSDX",
            },
            {
              href: "https://oclif.io",
              blurb: i("doc_node_npm_oclif_blurb"),
              title: "oclif",
            },
            {
              href: "https://github.com/infinitered/gluegun#readme",
              blurb: i("doc_node_npm_gluegun_blurb"),
              title: "Gluegun",
            },
          ]}
        />

        <h2>{i("doc_frameworks")}</h2>
        <ButtonGrid
          buttons={[
            {
              href: "https://angular.io",
              blurb: i("doc_frameworks_angular_blurb"),
              title: "Angular",
            },
            {
              href: "https://reactjs.org",
              badge: "Examples below",
              blurb: i("doc_frameworks_react_blurb"),
              title: "React",
            },
            {
              href: "https://vuejs.org",
              blurb: i("doc_frameworks_vue_blurb"),
              title: "Vue",
            },
            {
              href: "https://github.com/typescript-ruby/typescript-rails",
              badge: "Plugin",
              blurb: i("doc_frameworks_ror_blurb"),
              title: "Ruby on Rails",
            },
            {
              href:
                "https://www.typescriptlang.org/docs/handbook/asp-net-core.html",
              badge: "Guide",
              blurb: i("doc_frameworks_asp_blurb"),
              title: "ASP.NET Core",
            },
          ]}
        />

        <h2>{i("doc_apis")}</h2>
        <ButtonGrid
          buttons={[
            {
              href:
                "https://code.visualstudio.com/tutorials/functions-extension/getting-started",
              blurb: i("doc_apis_azure_blurb"),
              title: "Azure Functions",
            },
            {
              href: "https://feathersjs.com",
              blurb: i("doc_apis_feather_blurb"),
              title: "Feathers JS",
            },
            {
              href:
                "https://github.com/graphql-boilerplates/typescript-graphql-server",
              blurb: i("doc_apis_graphql_blurb"),
              title: "GraphQL",
            },
            {
              href: "https://nestjs.com",
              blurb: i("doc_apis_nest_blurb"),
              title: "Nest JS",
            },
            {
              href: "https://github.com/Microsoft/TypeScript-Node-Starter",
              blurb: i("doc_apis_node_blurb"),
              title: "Node Starter",
            },
            {
              href:
                "https://github.com/microsoft/TypeScript-WeChat-Starter/blob/master/README.md",
              badge: "Guide",
              blurb: i("doc_apis_wechat_blurb"),
              title: "WeChat",
            },
          ]}
        />

        <h2>{i("doc_react")}</h2>
        <ButtonGrid
          buttons={[
            {
              href: "https://create-react-app.dev",
              blurb: i("doc_react_create_blurb"),
              title: "Create React App",
            },
            {
              href: "https://www.gatsbyjs.org",
              badge: "Plugin",
              blurb: i("doc_react_gatsby_blurb"),
              title: "Gatsby",
            },
            {
              href: "https://nextjs.org",
              blurb: i("doc_react_next_blurb"),
              title: "Next.js",
            },
            {
              href: "https://github.com/jaredpalmer/razzle",
              blurb: i("doc_react_razzle_blurb"),
              title: "Razzle",
            },
            {
              href:
                "https://reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains",
              blurb: i("doc_react_toolchains_blurb"),
              title: i("doc_react_toolchains_title"),
            },
          ]}
        />

        <h2>{i("doc_apps")}</h2>
        <ButtonGrid
          buttons={[
            {
              href: "https://babeljs.io/docs/en/babel-preset-typescript",
              badge: "Plugin",
              blurb: i("doc_apps_electron_blurb"),
              title: "Electron",
            },
            {
              href: "https://expo.io/",
              blurb: i("doc_apps_expo_blurb"),
              title: "Expo",
            },
            {
              href: "https://facebook.github.io/react-native/",
              blurb: i("doc_apps_react_native_blurb"),
              title: "React Native",
            },
            {
              href: "https://www.nativescript.org/",
              blurb: i("doc_apps_native_script_blurb"),
              title: "NativeScript",
            },
            {
              href: "https://www.microsoft.com/en-us/makecode/",
              blurb: i("doc_apps_make_code_blurb"),
              title: "MakeCode",
            },
          ]}
        />

        <h2>{i("doc_tooling")}</h2>
        <ButtonGrid
          buttons={[
            {
              href: "https://babeljs.io/docs/en/babel-preset-typescript",
              badge: "Plugin",
              blurb: i("doc_tooling_babel_blurb"),
              title: "Babel",
            },
            {
              href: "https://parceljs.org",
              blurb: i("doc_tooling_parcel_blurb"),
              title: "Parcel",
            },
            {
              href: "https://webpack.js.org/guides/typescript/",
              badge: "Plugin",
              blurb: i("doc_tooling_webpack_blurb"),
              title: "Webpack",
            },
          ]}
        />

        <h1>{i("doc_learn")}</h1>
        <ButtonGrid
          buttons={[
            {
              href: "/docs/handbook/release-notes/typescript-3-8.html",
              blurb: i("doc_learn_3_5_release_notes_title"),
              title: i("doc_learn_3_5_release_notes_title"),
            },
            {
              href: "/docs/handbook/basic-types.html",
              blurb: i("doc_headline_handbook_blurb"),
              title: "Handbook",
            },
            {
              href: "/docs/handbook/declaration-files/introduction.html",
              blurb: i("doc_learn_d_ts_blurb"),
              title: i("doc_learn_d_ts_title"),
            },
            {
              href: "/play",
              blurb: i("doc_learn_playground_blurb"),
              title: "Playground",
            },
          ]}
        />
      </div>
    </Layout>
  )
}


export const query = graphql`
  query DocsHome {
    ...AllSitePage
  }
`

export default (props: Props) => (
  <Intl locale={props.pageContext.lang}>
    <Index {...props} />
  </Intl>
)
