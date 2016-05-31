Ext.define('Appone.appone.shared.com.model.organization.contactmanagement.CommunicationGroupModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "auto",
          "defaultValue": ""
     }, {
          "name": "commGroupId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "commGroupName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "commGroupDescription",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "versionId",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});