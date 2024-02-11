import {
  Divider,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import { FiChevronRight, FiHome } from 'react-icons/fi'
import PoSParameters from '@/components/Parameters/PosParameters'
// import StakingParameters from '@/components/Parameters/StakingParameters'
// import DistributionParameters from '@/components/Parameters/DistributionParameters'
// import SlashingParameters from '@/components/Parameters/SlashingParameters'
// import GovParameters from '@/components/Parameters/GovParameters'
import { fetchAndConvertToJSON } from '@/utils/helper'
import ChainParameters from '@/components/Parameters/ChainParameters'
import GovParameters from '@/components/Parameters/GovParameters'

export default function Parameters() {
  return (
    <>
      <Head>
        <title>Parameters | Namada Explorer</title>
        <meta name="description" content="Parameters | Namada Explorer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HStack h="24px">
          <Heading size={'md'}>Parameters</Heading>
          <Divider borderColor={'gray'} size="10px" orientation="vertical" />
          <Link
            as={NextLink}
            href={'/'}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
            display="flex"
            justifyContent="center"
          >
            <Icon
              fontSize="16"
              color={useColorModeValue('light-theme', 'dark-theme')}
              as={FiHome}
            />
          </Link>
          <Icon fontSize="16" as={FiChevronRight} />
          <Text>Parameters</Text>
        </HStack>
        <ChainParameters />
        <PoSParameters />
        <GovParameters />
      </main>
    </>
  )
}
