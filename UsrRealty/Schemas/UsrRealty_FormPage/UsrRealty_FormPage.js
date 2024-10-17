define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "22256c6b-be1b-4310-ace1-a6e662df9920",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_k2p9241",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_a9i9zwv",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_a9i9zwv",
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(NumberInput_k2p9241_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_0umazrg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_nrh482y",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_nrh482y",
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(NumberInput_0umazrg_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_qtpe9oo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommision_qi4mqgf",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommision_qi4mqgf",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_cdl5apt",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn4_4bopgmu",
					"ariaLabel": "#ResourceString(ComboBox_cdl5apt_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"control": "$PDS_UsrColumn4_4bopgmu",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_u3p58sc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_u3p58sc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_cdl5apt",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_gnwuuy2",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealtyOffer_ww5sprk",
					"ariaLabel": "#ResourceString(ComboBox_gnwuuy2_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": false,
					"control": "$PDS_UsrRealtyOffer_ww5sprk"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_b88z7o1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_b88z7o1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_gnwuuy2",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_jih2abt",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_7g3vsiw",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_7g3vsiw",
					"multiline": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ta6iqv8",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ta6iqv8_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_andpkkk",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ta6iqv8",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_spj9q0z",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_andpkkk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_wz42nmc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_wz42nmc_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_spj9q0z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ukft5kv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ukft5kv_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_bf3cg35DS"
						}
					}
				},
				"parentName": "FlexContainer_spj9q0z",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_h9zp1sx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_h9zp1sx_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_spj9q0z",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_jwjuov7",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_jwjuov7_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_h9zp1sx",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_191ixvc",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_191ixvc_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_h9zp1sx",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_y4s9zfb",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_y4s9zfb_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_y4s9zfb_GridDetail_bf3cg35",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_bf3cg35"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_y4s9zfb_SearchValue",
							"GridDetailSearchFilter_y4s9zfb_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_spj9q0z",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_qrmxjf6",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ta6iqv8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_bf3cg35",
					"activeRow": "$GridDetail_bf3cg35_ActiveRow",
					"selectionState": "$GridDetail_bf3cg35_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_bf3cg35_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_bf3cg35DS_Id",
					"columns": [
						{
							"id": "e4a44595-42d7-4608-1e77-aaf83ae7237a",
							"code": "GridDetail_bf3cg35DS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_bf3cg35DS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 181
						},
						{
							"id": "076738ea-2fcd-95bc-21a5-7dada00ca08c",
							"code": "GridDetail_bf3cg35DS_UsrOwner",
							"caption": "#ResourceString(GridDetail_bf3cg35DS_UsrOwner)#",
							"dataValueType": 10,
							"width": 114
						},
						{
							"id": "3b38120c-a637-1d0f-5566-6b40469899f9",
							"code": "GridDetail_bf3cg35DS_UsrVisit",
							"caption": "#ResourceString(GridDetail_bf3cg35DS_UsrVisit)#",
							"dataValueType": 7
						},
						{
							"id": "57467b4d-7734-d59b-7f99-4ab6c67d18c0",
							"code": "GridDetail_bf3cg35DS_UsrComment",
							"caption": "#ResourceString(GridDetail_bf3cg35DS_UsrComment)#",
							"dataValueType": 28,
							"width": 163
						},
						{
							"id": "9e9ff150-6982-be70-18b2-5d25ab460a4d",
							"code": "GridDetail_bf3cg35DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_bf3cg35DS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_qrmxjf6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_bf3cg35_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_bf3cg35DS",
							"filters": "$GridDetail_bf3cg35 | crt.ToCollectionFilters : 'GridDetail_bf3cg35' : $GridDetail_bf3cg35_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_bf3cg35_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_bf3cg35_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_bf3cg35DS",
							"filters": "$GridDetail_bf3cg35 | crt.ToCollectionFilters : 'GridDetail_bf3cg35' : $GridDetail_bf3cg35_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_bf3cg35_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_bf3cg35_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_bf3cg35_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetail",
							"filters": "$GridDetail_bf3cg35 | crt.ToCollectionFilters : 'GridDetail_bf3cg35' : $GridDetail_bf3cg35_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_bf3cg35_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_bf3cg35_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_bf3cg35DS",
							"filters": "$GridDetail_bf3cg35 | crt.ToCollectionFilters : 'GridDetail_bf3cg35' : $GridDetail_bf3cg35_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_bf3cg35_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrPrice_b1g5at4": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrArea_nrh482y": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(MinPriceArea)#"
								}
							}
						}
					},
					"PDS_UsrColumn4_b1i2ro5": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrPrice_a9i9zwv": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(MinPriceArea)#"
								}
							}
						}
					},
					"PDS_UsrRealtyOffer_r1q991k": {
						"modelConfig": {
							"path": "PDS.UsrRealtyOffer"
						}
					},
					"PDS_UsrRealtyOffer_9qrpm0j": {
						"modelConfig": {
							"path": "PDS.UsrRealtyOffer"
						}
					},
					"PDS_UsrComment_7g3vsiw": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrColumn4_4bopgmu": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrRealtyOffer_ww5sprk": {
						"modelConfig": {
							"path": "PDS.UsrRealtyOffer"
						}
					},
					"GridDetail_bf3cg35": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_bf3cg35DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_y4s9zfb_GridDetail_bf3cg35",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_bf3cg35DS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_bf3cg35DS.UsrCustomer"
									}
								},
								"GridDetail_bf3cg35DS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_bf3cg35DS.UsrOwner"
									}
								},
								"GridDetail_bf3cg35DS_UsrVisit": {
									"modelConfig": {
										"path": "GridDetail_bf3cg35DS.UsrVisit"
									}
								},
								"GridDetail_bf3cg35DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_bf3cg35DS.UsrComment"
									}
								},
								"GridDetail_bf3cg35DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_bf3cg35DS.CreatedOn"
									}
								},
								"GridDetail_bf3cg35DS_Id": {
									"modelConfig": {
										"path": "GridDetail_bf3cg35DS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrCommision_qi4mqgf": {
						"modelConfig": {
							"path": "PDS.UsrCommision"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_bf3cg35DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty"
						},
						"scope": "page"
					},
					"GridDetail_bf3cg35DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrVisit": {
									"path": "UsrVisit"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
{

  request: "crt.HandleViewModelAttributeChangeRequest",

 handler: async (request, next) =>
   {
     if (request.attributeName === 'PDS_UsrPrice_a9i9zwv') {
       const priceValue = await request.$context.PDS_UsrPrice_a9i9zwv;
       
       const isPriceOver5000 = priceValue > 5000;
       if (isPriceOver5000) {

         request.$context.enableAttributeValidator('PDS_UsrComment_7g3vsiw', 'required');

       }
       else {
 
         request.$context.disableAttributeValidator('PDS_UsrComment_7g3vsiw', 'required');
      
       }
    
     }

 
     return next?.handle(request);
   } 
 },{
    request: "crt.HandleViewModelAttributeChangeRequest",

   handler: async (request, next) =>
   {
    //PDS_UsrRealtyOffer_9qrpm0j
      if (request.attributeName === 'PDS_UsrPrice_a9i9zwv' || request.attributeName==='PDS_UsrRealtyOffer_ww5sprk') {
        const price=await request.$context.PDS_UsrPrice_a9i9zwv;
        const offer=await request.$context.PDS_UsrRealtyOffer_ww5sprk;
        const displayValue=offer?.displayValue;
        let percentage=0;
        if(displayValue==="Sale"){
          percentage=0.45;
                  const total=price * percentage;
        
          request.$context.PDS_UsrCommision_qi4mqgf=total;
        }else{
          percentage=0.018;
                  const total=price * percentage;

          request.$context.PDS_UsrCommision_qi4mqgf=total;
        }

      }
 }
}
 
 
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{

"usr.DGValidator": {

  /* Business logic of the validator. */

  "validator": function (config) {
    return function (control) {
      let value = control.value;

      let minValue = config.minValue;
      return value >= minValue ? null : {

        "usr.DGValidator": { message: config.message }

      };
    };

  },
  /* Validator parameters. */

  "params": [
    {
      "name": "minValue"

    },
    {

      "name": "message"
    }

  ],
  "async": false
}
        }/**SCHEMA_VALIDATORS*/
	};
});