import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import type {Props} from '@theme/TOC';
// Docusaurus 2/3 için resmi hook
import {useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './styles.module.css';

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

type GitHubBoxProps = {
  url: string;
};

function GitHubBox({url}: GitHubBoxProps): ReactNode {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '16px',
        cursor: 'pointer',
        gap: '8px',
        fontSize: '0.85rem',
        color: 'var(--ifm-color-primary)'
      }}
    >
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="GitHub"
        style={{ width: '28px', height: '28px' }}
      />
      <span>GitHub Reposu</span>
    </a>
  );
}

export default function TOC({className, ...props}: Props): ReactNode {
  let githubUrl: string | undefined;

  // Bu hook sadece docs sayfalarında çalışır; blog/page için fallback önemli
  try {
    const doc = useDoc();
    const frontMatter = (doc as any)?.frontMatter ?? {};
    githubUrl = frontMatter.github_url as string | undefined;
  } catch {
    githubUrl = undefined;
  }

  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />

      {githubUrl && <GitHubBox url={githubUrl} />}
    </div>
  );
}