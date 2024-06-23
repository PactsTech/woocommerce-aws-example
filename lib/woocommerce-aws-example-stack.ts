import * as fs from 'fs';
import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lightsail from 'aws-cdk-lib/aws-lightsail';

export class WoocommerceAwsExampleStack extends cdk.Stack {
  public instance: lightsail.CfnInstance;
  public staticIp: lightsail.CfnStaticIp;
  public distribution: lightsail.CfnDistribution;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const filePath = path.join(__dirname, 'userdata.sh');
    const userData = fs.readFileSync(filePath, { encoding: 'utf8' });
    this.instance = new lightsail.CfnInstance(this, 'Instance', {
      instanceName: 'woocommerce',
      blueprintId: 'wordpress',
      bundleId: 'nano_2_0',
      userData
    });
    this.staticIp = new lightsail.CfnStaticIp(this, 'StaticIp', {
      staticIpName: cdk.Fn.join('_', [this.instance.ref, 'staticip']),
      attachedTo: this.instance.ref
    });
  }
}
