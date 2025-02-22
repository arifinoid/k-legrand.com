import React from 'react';
import Helmet from 'react-helmet';
import urljoin from 'url-join';
import PropTypes from 'prop-types';

import config from '../../../config/SiteConfig';
import favicon from './favicon.png';

class BlogSEO extends React.Component {
  render() {
    const { postNode, postPath, postSEO } = this.props;

    const postMeta = postNode.frontmatter;

    const title = postMeta.title;
    const description = postMeta.description
      ? postMeta.description
      : postNode.excerpt;
    const postURL = urljoin(config.blogUrl, config.pathPrefix, postPath);
    const image = urljoin(config.blogUrl, config.pathPrefix, postMeta.cover);
    const blogURL = urljoin(config.blogUrl, config.pathPrefix);
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
    ];
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
        }
      );
    }
    return (
      <Helmet>
        <html lang="en-US" amp />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={favicon} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content={config.ogSiteName} />
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ''}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
    );
  }
}

BlogSEO.propTypes = {
  postNode: PropTypes.any,
  postSEO: PropTypes.any,
  postPath: PropTypes.string,
};

export default BlogSEO;
