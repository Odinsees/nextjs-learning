import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MEDIA_QUERY } from 'constants/screenSize';
import { BASE_URL_IMAGE } from 'constants/api';
import { useMediaQuerySSR } from 'hooks/useMediaQuerySSR';
import { useArticle } from 'hooks/useArticle';
import { formatDate } from 'formatters/date';
import { SectionTitle } from 'components/common/section-title/SectionTitle';

import styles from './styles.module.scss';

export const ArticlePage: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { article, isLoading, isError } = useArticle(id);
  const isDesktop = useMediaQuerySSR(MEDIA_QUERY);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className={styles.articlePage}>
      <div className={styles.articleHeader}>
        <SectionTitle title={article.news_desk} />
        <p className={styles.articleDate}>{formatDate(article.pub_date)}</p>
      </div>
      <div className={styles.articleImage}>
        <Image
          src={`${BASE_URL_IMAGE}/${article.multimedia[0].url}`}
          alt="photo"
          width={375}
          height={280}
          layout={isDesktop ? 'fill' : 'responsive'}
          objectFit="cover"
        />
      </div>
      <h1 className={styles.articleTitle}>{article.headline.main}</h1>
      <p className={styles.articleSubTitle}>{article.lead_paragraph}</p>
      <p className={styles.articleText}>{article.abstract}</p>
    </div>
  );
};
