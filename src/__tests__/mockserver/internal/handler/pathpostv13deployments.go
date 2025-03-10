// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"fmt"
	"log"
	"mockserver/internal/handler/assert"
	"mockserver/internal/logging"
	"mockserver/internal/sdk/models/operations"
	"mockserver/internal/sdk/types"
	"mockserver/internal/sdk/utils"
	"mockserver/internal/tracking"
	"net/http"
)

func pathPostV13Deployments(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "createDeployment[0]":
			dir.HandlerFunc("createDeployment", testCreateDeploymentCreateDeployment0)(w, req)
		default:
			http.Error(w, "Unknown test: "+test, http.StatusBadRequest)
		}
	}
}

func testCreateDeploymentCreateDeployment0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityAuthorizationHeader(req, true, "Bearer"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if err := assert.ContentType(req, "application/json", true); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.AcceptHeader(req, []string{"application/json"}); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.HeaderExists(req, "User-Agent"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	respBody := &operations.CreateDeploymentResponseBody{
		Build: operations.Build{
			Env: []string{},
		},
		Env: []string{
			"<value>",
			"<value>",
			"<value>",
		},
		InspectorURL:              types.String("https://grave-dredger.com"),
		IsInConcurrentBuildsQueue: false,
		IsInSystemBuildsQueue:     false,
		ProjectSettings:           operations.CreateDeploymentProjectSettings{},
		AliasAssigned:             false,
		BootedAt:                  4336.60,
		BuildingAt:                7030.55,
		BuildSkipped:              true,
		Creator: operations.Creator{
			UID: "<id>",
		},
		Public:    false,
		Status:    operations.CreateDeploymentStatusQueued,
		Type:      operations.CreateDeploymentTypeLambdas,
		CreatedAt: 5133.44,
		Name:      "<value>",
		ID:        "<id>",
		Version:   1218.01,
		Meta: map[string]string{
			"key":  "<value>",
			"key1": "<value>",
		},
		ReadyState: operations.ReadyStateInitializing,
		Regions:    []string{},
		URL:        "https://apprehensive-perp.info/",
		ProjectID:  "<id>",
		OwnerID:    "<id>",
		Routes: []operations.Routes{
			operations.CreateRoutesRoutes1(
				operations.Routes1{
					Src: "<value>",
				},
			),
			operations.CreateRoutesRoutes1(
				operations.Routes1{
					Src: "<value>",
				},
			),
		},
		Plan:      operations.PlanPro,
		CreatedIn: "<value>",
	}
	respBodyBytes, err := utils.MarshalJSON(respBody, "", true)

	if err != nil {
		http.Error(
			w,
			"Unable to encode response body as JSON: "+err.Error(),
			http.StatusInternalServerError,
		)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(respBodyBytes)
}
