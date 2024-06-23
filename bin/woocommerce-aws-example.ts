#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WoocommerceAwsExampleStack } from '../lib/woocommerce-aws-example-stack';

const app = new cdk.App();
new WoocommerceAwsExampleStack(app, 'WoocommerceAwsExampleStack');