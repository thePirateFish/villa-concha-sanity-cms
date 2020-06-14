// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import siteSettings from './documents/siteSettings'
import pages from './documents/pages'
import navbar from './documents/navbar'
import footer from './documents/footer'


// Object types
import link from './objects/link'
import video from './objects/video'
import subsection from './objects/subsection'
import mapSubsection from './objects/mapSubsection'
import section from './objects/section'
import content from './objects/content'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'villaconcha',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    video,
    subsection,
    section,
    link,
    navbar,
    pages,
    footer,
    content
    // mapSubsection

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
