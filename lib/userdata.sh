#!/bin/bash

echo "##### INSTALL WOOCOMMERCE #####"
sudo /opt/bitnami/wp-cli/bin/wp plugin install woocommerce --activate
echo "##### INSTALL Pacts Extension #####"
mnkdir /opt/pacts
wget -P /opt/pacts https://github.com/PactsTech/pacts-woo-extension/releases/latest/download/pacts-woo-extension.zip
sudo /opt/bitnami/wp-cli/bin/wp plugin install /opt/pacts/pacts-woo-extension.zip --activate