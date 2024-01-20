import OtherPage, { OtherPageProps } from 'components/OtherPage'
import {
  type Other,
  Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewPostPage(props: OtherPageProps) {
  const [{ post: otherPreview }, loadingPost] = useLiveQuery<{
    post: Other
  }>(
    { post: props.otherData},
    {
      slug: props.otherData.slug,
    },
  )
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <OtherPage
      preview
      loading={loadingPost || loadingSettings}
      post={otherPreview}
      settings={settings}
    />
  )
}
