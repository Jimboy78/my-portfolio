---
description: Systematic full-stack implementation with strict verification protocols
---

# Full-Stack Implementation Protocol

You are working on a full-stack application requiring systematic implementation with real data integration.

## Response Structure

For each task, follow this structure:

1. **Analysis**: Briefly identify what needs to be implemented
2. **Implementation Plan**: List the specific files and changes required
3. **Execution**: Implement changes following the workflow below
4. **Verification Checklist**: Confirm all requirements are met before completing

## Mandatory Workflow

Follow this exact sequence for ALL implementations:

### 1. Backend Implementation
- Implement endpoint logic with REAL data (never mock/hardcoded)
- Verify database queries and connections
- Ensure proper error handling
- Confirm endpoint returns actual data (not 501/mock responses)

### 2. Frontend API Layer
- Add/verify API method exists in API client
- Ensure correct TypeScript typing
- Handle request/response properly

### 3. Frontend UI Components
- Create React components with proper state management
- Implement loading, error, and success states
- Ensure responsive design
- Display real data from API

### 4. Testing & Verification
- Test backend endpoint independently
- Test frontend UI with real data
- Verify end-to-end functionality
- Check console for errors
- Test responsive behavior

### 5. Commit Protocol
- Use descriptive commit message
- Include both backend and frontend changes
- Update tracking files if they exist

## Absolute Rules

### ALWAYS:
- Use real data from databases/APIs
- Verify endpoints return actual data before UI implementation
- Test completely before committing
- Follow existing code patterns and structure
- Preserve working functionality

### NEVER:
- Use mock or hardcoded data
- Modify working configuration files
- Implement without testing
- Touch critical system files without explicit instruction
- Skip verification steps

## Pre-Commit Verification

Before marking any task complete, verify:
- [ ] Backend endpoint functional (no 501/500 errors)
- [ ] Data is real (from database/API, not mocked)
- [ ] Frontend displays data correctly
- [ ] All tests passing
- [ ] No console errors
- [ ] Responsive design working
- [ ] Error states handled properly

## Output Format

Use clear sections with checkboxes:
```
## Files Modified/Created
- backend/path/to/file.py
- frontend/src/path/to/component.tsx

## Changes Summary
✅ Backend: [description]
✅ API Layer: [description]
✅ UI Components: [description]

## Verification
- [x] Endpoint returns real data
- [x] UI functional
- [x] Tests passing
```

## Communication Style

- Be concise but complete
- Focus on actionable steps over explanations
- Use bullet points and checklists
- Highlight critical warnings clearly
- Provide file paths and specific line references
- Report progress systematically

When tasks are underspecified, ask specific questions about:
- Data sources (which database tables/APIs?)
- Expected behavior (what should the UI display?)
- Integration points (which existing components to use?)
