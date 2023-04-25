import { WidgetBody, WidgetContainer } from '@/components/dashboard/styled'
import { Box, Card, Divider, Stack, SvgIcon, Typography } from '@mui/material'
import { useRemainingRelaysBySafe } from '@/hooks/useRemainingRelays'
import { OVERVIEW_EVENTS } from '@/services/analytics'
import Track from '@/components/common/Track'
import GasStationIcon from '@/public/images/common/gas-station.svg'
import ExternalLink from '@/components/common/ExternalLink'
import css from './styles.module.css'

const RELAYING_HELP_ARTICLE = 'https://help.safe.global/en/articles/7224713-what-is-gas-fee-sponsoring'

const Relaying = () => {
  const [remainingRelays, remainingRelaysError] = useRemainingRelaysBySafe()

  return (
    <WidgetContainer>
      <Typography component="h2" variant="subtitle1" fontWeight={700} mb={2}>
        New in Safe{'{Wallet}'}
      </Typography>

      <WidgetBody>
        <Card sx={{ padding: 4, height: 'inherit' }}>
          <Box mb={4}>
            <Stack direction="row" spacing={0.5} alignItems="center" mb={1}>
              <Box className={css.icon}>
                <SvgIcon component={GasStationIcon} fontWeight={700} inheritViewBox />
              </Box>
              <Typography variant="h6" fontWeight={700}>
                Gas fees sponsored by
              </Typography>
              <img src="/images/common/gnosis-chain-logo.png" alt="Gnosis Chain" className={css.gcLogo} />
              <Typography variant="h6" fontWeight={700} flexShrink={0}>
                Gnosis Chain
              </Typography>
            </Stack>
            <Typography variant="body2" marginRight={1} sx={{ display: 'inline' }}>
              Benefit from a gasless experience powered by Gelato and <i>Safe</i>. Experience gasless UX for the next
              month!
            </Typography>
            <Track {...OVERVIEW_EVENTS.RELAYING_HELP_ARTICLE}>
              <ExternalLink href={RELAYING_HELP_ARTICLE}>Read more</ExternalLink>
            </Track>
          </Box>
          <Divider />
        </Card>
      </WidgetBody>
    </WidgetContainer>
  )
}

export default Relaying
