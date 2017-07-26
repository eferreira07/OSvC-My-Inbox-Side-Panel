
ORACLE_SERVICE_CLOUD.extension_loader.load("cti_extension", "1.0").then(function(sdk) {
            sdk.registerUserInterfaceExtension(function(userInterfaceContext) {
                userInterfaceContext.getLeftSidePaneContext().then(function(leftSidePaneContext) {
                    //Use any unique identifier when creating the side pane.
                    leftSidePaneContext.getSidePane("20170726").then(function(leftPanelMenu) {
                        leftPanelMenu.setContentUrl('SidePainelExample.html');
                        leftPanelMenu.setLabel("MyInboxPanel");
                        leftPanelMenu.setVisible(true);
                        //Font awesome is not included by default, but you can use it as per this example
                        var icon = leftPanelMenu.createIcon("font awesome");
                        icon.setIconClass("fa-inbox");
                        leftPanelMenu.addIcon(icon);
                        leftPanelMenu.render();
                    });
                });
            });
        });

